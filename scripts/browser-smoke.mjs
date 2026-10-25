import assert from "node:assert/strict";
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const origin = process.env.SITE_TEST_ORIGIN || "http://127.0.0.1:4321";
const browser = await chromium.launch({ headless: true, ...(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {}), args: ["--no-sandbox"] });
const artifactDir = "test-results";
await mkdir(artifactDir, { recursive: true });
const errors = [];

function centralWeekday() {
  const items = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago", year: "numeric", month: "2-digit", day: "2-digit",
  }).formatToParts(new Date());
  const pick = kind => items.find(x => x.type === kind).value;
  const base = new Date(`${pick("year")}-${pick("month")}-${pick("day")}T12:00:00Z`);
  for (let i = 2; i <= 30; i++) {
    const d = new Date(base);
    d.setUTCDate(d.getUTCDate() + i);
    if (d.getUTCDay() >= 1 && d.getUTCDay() <= 5) return d.toISOString().slice(0, 10);
  }
  throw new Error("No weekday available");
}

async function checkViewport(width, height) {
  const page = await browser.newPage({ viewport: { width, height }, reducedMotion: "reduce" });
  try {
    await page.goto(origin + "/", { waitUntil: "networkidle" });
    assert.equal(await page.locator("main#main").count(), 1);
    assert.equal(await page.locator("h1").count(), 1, "Expected one main headline");
    assert.equal(await page.locator("header a[href='tel:+12624010826']").count(), 1, "Missing mobile call CTA");
    const overflow = await page.evaluate(() => ({
      page: document.documentElement.scrollWidth, viewport: window.innerWidth,
      body: document.body.scrollWidth,
    }));
    if (overflow.page > overflow.viewport + 2) {
      const offenders = await page.evaluate(() => [...document.body.querySelectorAll("*")]
        .map(el => ({ el, rect: el.getBoundingClientRect(), css: getComputedStyle(el) }))
        .filter(({ rect, css }) => css.display !== "none" && css.visibility !== "hidden"
          && rect.width > 0 && (rect.right > innerWidth + 3 || rect.left < -3))
        .sort((a, b) => b.rect.right - a.rect.right)
        .slice(0, 18)
        .map(({ el, rect }) => ({
          tag: el.tagName.toLowerCase(),
          cls: typeof el.className === "string" ? el.className.slice(0, 75) : "",
          text: (el.textContent || "").slice(0, 35),
          left: Math.round(rect.left), right: Math.round(rect.right), width: Math.round(rect.width),
        })));
      throw new Error("Horizontal scroll on " + width + "px: " + JSON.stringify({ ...overflow, offenders }));
    }
    const call = page.locator("header a[href='tel:+12624010826']");
    const rect = await call.boundingBox();
    assert.ok(rect && rect.x >= 0 && rect.x + rect.width <= width + 2, "Call CTA outside viewport");
    const book = page.locator("header a[data-book]");
    if (await book.count() > 0) {
      const visible = book.filter({ visible: true });
      assert.equal(await visible.count(), 1, "Expected one visible header booking action");
      assert.match(await visible.first().getAttribute("href"), /^\/book/, "Booking CTA does not link to request form");
    }
    const slider = page.locator("[data-compare-input]");
    assert.equal(await slider.count(), 1, "Missing comparison slider");
    await slider.focus();
    const start = Number(await slider.inputValue());
    await page.keyboard.press("ArrowRight");
    assert.equal(Number(await slider.inputValue()), start + 1, "Comparison slider ignores keyboard");
    await page.screenshot({ path: `${artifactDir}/homepage-${width}.png`, fullPage: false });

    await page.goto(origin + "/book", { waitUntil: "networkidle" });
    assert.equal(await page.locator("#booking-sms-consent").isChecked(), false, "SMS consent defaulted checked");
    assert.equal(await page.locator("#submit-request").isDisabled(), true);
    await page.locator("#booking-date").fill(centralWeekday());
    await page.getByRole("button", { name: "9:00 AM", exact: true }).click();
    await page.locator("#booking-name").fill("Browser QA Example");
    await page.locator("#booking-email").fill("test@example.invalid");
    await page.locator("#booking-sms-consent").check();
    await page.locator("#submit-request").click();
    assert.match(await page.locator("#booking-feedback").innerText(), /phone number/i, "Missing SMS phone validation");
    await page.locator("#booking-phone").fill("(262) 555-0100");
    await page.locator("#submit-request").click();
    const feedback = await page.locator("#booking-feedback").innerText();
    assert.match(feedback, /Preview mode.*no booking request was sent/i, "Static preview incorrectly attempted a live booking");
    await page.screenshot({ path: `${artifactDir}/booking-${width}.png`, fullPage: false });
    console.log("PASS browser smoke at " + width + "px");
  } catch (e) {
    errors.push(`${width}px: ${e instanceof Error ? e.message : String(e)}`);
    try { await page.screenshot({ path: `${artifactDir}/failure-${width}.png`, fullPage: true }); } catch {}
  } finally {
    await page.close();
  }
}

try {
  for (const width of [320, 360, 375, 768, 1280]) await checkViewport(width, 900);
  assert.deepEqual(errors, [], errors.join("\n"));
  console.log("All cross-width booking, phone, comparison and overflow checks passed.");
} finally {
  await browser.close();
}
