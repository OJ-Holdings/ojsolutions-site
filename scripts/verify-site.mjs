// Build-output smoke checks for the standalone OJ Solutions website.
// Run after `npm run build`; no external service or customer data is required.
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../dist/", import.meta.url));
const routes = [
  "index", "book", "services", "demo", "about", "ai-receptionist",
  "websites", "commercials", "calls-and-data",
  "ai-receptionist-for-pressure-washing", "ai-receptionist-for-hvac",
  "ai-receptionist-for-plumbing", "ai-receptionist-for-landscaping",
  "ai-receptionist-for-roofing", "ai-receptionist-for-auto-detailing",
];
const html = (path) => {
  const filename = join(root, path === "index" ? "index.html" : path + ".html");
  assert.ok(existsSync(filename), "Missing generated page: " + filename);
  const contents = readFileSync(filename, "utf8");
  assert.match(contents, /<title[^>]*>[^<]+<\/title>/i, path + " has no document title");
  assert.match(contents, /<main[^>]*\bid=["']main["']/i, path + " lacks a main landmark");
  return contents;
};
for (const path of routes) html(path);

const home = html("index");
assert.match(home, /You're on the job/, "Missing approved operator-first hero");
assert.match(home, /tel:\+12624010826/, "Missing live demo call link");
assert.match(home, /We run a service business too\./, "Missing operator proof section");
assert.match(home, /href=["']\/services["']/, "Full services link missing");
assert.match(home, /data-call-demo/, "Animated phone demo was removed");
assert.match(home, /id=["']proof["']/, "Operator proof and commercial section missing");
assert.match(home, /data-featured-video/, "Commercial preview video missing");
assert.match(home, /data-play-sound/, "User-initiated audio control missing");
assert.match(home, /OJ Exterior Care/, "Operator proof attribution missing");
assert.match(home, /"Jacob Prahl"/, "Verified founder name missing from structured data");
assert.match(home, /"Oscar Johnston"/, "Verified founder name missing from structured data");
assert.match(home, /id=["']services["'][\s\S]*?Three ways we get you more customers/, "Three services section missing");
assert.match(home, /id=["']pricing["'][\s\S]*?Simple pricing/, "Simple pricing section missing");


// One published price source (src/data/pricing.ts): one AI Receptionist plan,
// no Starter or Pro tiers, and never the old $797/$2,000 offer.
const pricingSource = readFileSync(new URL("../src/data/pricing.ts", import.meta.url), "utf8");
const price = (pattern, label) => {
  const found = pricingSource.match(pattern);
  assert.ok(found, "Could not read " + label + " from src/data/pricing.ts");
  return "$" + Number(found[1]).toLocaleString("en-US");
};
const receptionistMonthly = price(/receptionist:\s*\{[\s\S]*?monthly:\s*(\d+)/, "the receptionist monthly price");
const receptionistSetup = price(/receptionist:\s*\{[\s\S]*?setup:\s*(\d+)/, "the receptionist setup price");
const websiteBuild = price(/website:\s*\{[\s\S]*?build:\s*\{[\s\S]*?price:\s*(\d+)/, "the website build price");
const videoSingle = price(/video:\s*\{[\s\S]*?single:\s*(\d+)/, "the single video ad price");
const aiLanding = html("ai-receptionist");
for (const [path, page] of [["homepage", home], ["receptionist", aiLanding]]) {
  assert.ok(page.includes(receptionistMonthly), path + " missing the AI Receptionist price " + receptionistMonthly);
  assert.ok(page.includes(receptionistSetup) && /setup/i.test(page), path + " missing the AI Receptionist setup price " + receptionistSetup);
  assert.doesNotMatch(page, /\bStarter\b|>\s*Pro\s*<|\bPro (plan|tier)\b|\$597\b/i, path + " shows the withdrawn Starter/Pro tiers");
  assert.doesNotMatch(page, /\$797\b|\$2,000\b/, path + " displays withdrawn prices");
}
for (const amount of [websiteBuild, videoSingle]) {
  assert.ok(home.includes(amount), "Homepage pricing missing " + amount);
}
assert.match(home, /Google reviews of OJ Exterior Care/i,
  "Founder-company reviews must be explicitly attributed to the separate exterior-care business");

// The real demo call plays in the flat player on the receptionist page.
assert.match(aiLanding, /data-player\b/, "Demo call player missing");
assert.match(aiLanding, /\/audio\/demo-call\.mp3/, "Demo call player is not wired to the recording");
assert.ok(existsSync(join(root, "audio", "demo-call.mp3")), "Demo call recording missing from the build");

const book = html("book");
assert.match(book, /id=["']consultation-form["']/);
assert.match(book, /id=["']booking-sms-consent["'][^>]*type=["']checkbox["']|type=["']checkbox["'][^>]*id=["']booking-sms-consent["']/);
const smsCheckbox = book.match(/<input\b[^>]*id=["']booking-sms-consent["'][^>]*>/i)?.[0] ?? "";
assert.ok(smsCheckbox, "Missing optional SMS checkbox");
assert.doesNotMatch(smsCheckbox, /\bchecked(?:[=>\s]|$)/i, "SMS consent must default unchecked");
assert.match(book, /We(?:'|&#39;|&apos;)ll text or email you to confirm your time\./, "Booking confirmation line missing");
assert.match(book, /oj-solutions-consultations/, "Booking form missing Supabase intake endpoint");
assert.match(book, /smsConsent/, "Booking form is not transmitting consent choice");

const services = html("services");
assert.match(services, /AI Receptionist/);
assert.match(services, /Websites/);
assert.match(services, /Video Ads/);

// Video ads: the editing-suite page, and we don't film.
const commercials = html("commercials");
assert.match(commercials, /Watch your clips become an ad/, "Clips-to-ad timeline missing");
assert.match(commercials, /data-suite\b/, "Clips-to-ad timeline markup missing");
assert.match(commercials, /data-monitor\b/, "Editing-monitor players missing");
assert.match(commercials, /Got clips\? Let(?:'|&#39;|&apos;)s make an ad\./, "Video ads final call to action missing");
assert.doesNotMatch(commercials, /\bwe film\b|plan, film|shot list|on camera/i, "Video ads copy implies we film on location");

// First-party measurement hooks have a stable privacy-safe event contract.
for (const event of ["demo_call_tap","book_request_submit","demo_audio_play","demo_audio_complete","commercial_play","pricing_view","faq_open","trade_page_view"]) {
  // Page-inline hooks compile with the shared layout, while booked submissions
  // compile into a script asset and are validated separately in source below.
  if (event !== "book_request_submit") assert.ok(home.includes('"' + event + '"'),
    "Missing conversion event hook: " + event);
}
const baseSource = readFileSync(new URL("../src/pages/book.astro", import.meta.url), "utf8");
assert.match(baseSource, /ojTrack\?\.\("book_request_submit"/, "Successful form submissions must emit book_request_submit.");

const demo = html("demo");
assert.match(demo, /fictional/i);
assert.match(demo, /separate fictional illustration/i);
assert.match(demo, /tel:\+12624010826/);

for (const path of routes.filter((p) => p.startsWith("ai-receptionist-for-"))) {
  assert.match(html(path), /Fictional example only/i, path + " lacks fictional-proof disclaimer");
  assert.match(html(path), /"@type":"Service"/, path + " is missing Service schema");
}
const output = routes.map(p => html(p)).join("\n");
assert.doesNotMatch(output, /SUPABASE_SERVICE_ROLE_KEY/, "Possible secret name accidentally exposed");
assert.doesNotMatch(output, /PLACEHOLDER:/, "A placeholder has reached a built page");

console.log("OJ Solutions static route and booking checks passed (" + routes.length + " pages).");
