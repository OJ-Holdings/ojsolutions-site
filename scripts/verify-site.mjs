// Build-output smoke checks for the standalone OJ Solutions website.
// Run after `npm run build`; no external service or customer data is required.
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = new URL("../dist/", import.meta.url).pathname;
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
assert.match(home, /Operator Advantage|We don't just build for businesses/i, "Missing original operator proof");
assert.match(home, /href=["']\/services["']/, "Full services link missing");
assert.match(home, /data-call-demo/, "Animated phone demo was removed");
assert.match(home, /id=["']commercial-showcase["']/, "Operator commercial spotlight missing");
assert.match(home, /data-featured-video/, "Commercial preview video missing");
assert.match(home, /data-play-sound/, "User-initiated audio control missing");
assert.match(home, /OJ Exterior Care/, "Operator proof attribution missing");
assert.match(home, /"Jacob Prahl"/, "Verified founder name missing from structured data");
assert.match(home, /"Oscar Johnston"/, "Verified founder name missing from structured data");


// One published price source: never quietly revert to the old $797/$2,000 offer.
const aiLanding = html("ai-receptionist");
for (const [path, page] of [["homepage", home], ["receptionist", aiLanding]]) {
  assert.match(page, /\$297\b/, path + " missing approved Starter price");
  assert.match(page, /\$597\b/, path + " missing approved Pro price");
  assert.doesNotMatch(page, /\$797\b|\$2,000\b/, path + " displays withdrawn prices");
}
assert.match(home, /missed-call text-back, review requests, follow-up workflows and reporting/i,
  "Homepage incorrectly describes Pro inclusions as optional add-ons");
assert.match(home, /Google reviews of\s*<strong>OJ Exterior Care<\/strong>/i,
  "Founder-company reviews must be explicitly attributed to the separate exterior-care business");

const book = html("book");
assert.match(book, /id=["']consultation-form["']/);
assert.match(book, /id=["']booking-sms-consent["'][^>]*type=["']checkbox["']|type=["']checkbox["'][^>]*id=["']booking-sms-consent["']/);
const smsCheckbox = book.match(/<input\b[^>]*id=["']booking-sms-consent["'][^>]*>/i)?.[0] ?? "";
assert.ok(smsCheckbox, "Missing optional SMS checkbox");
assert.doesNotMatch(smsCheckbox, /\bchecked(?:[=>\s]|$)/i, "SMS consent must default unchecked");
assert.match(book, /preferred.*not confirmed availability|preferences, not confirmed availability/i);
assert.match(book, /pending confirmation|not reserve a time/i);
assert.match(book, /oj-solutions-consultations/, "Booking form missing Supabase intake endpoint");
assert.match(book, /smsConsent/, "Booking form is not transmitting consent choice");

const services = html("services");
assert.match(services, /AI Receptionist/);
assert.match(services, /Websites/);
assert.match(services, /Commercials/);

const demo = html("demo");
assert.match(demo, /fictional/i);
assert.match(demo, /separate fictional illustration/i);
assert.match(demo, /tel:\+12624010826/);

for (const path of routes.filter((p) => p.startsWith("ai-receptionist-for-"))) {
  assert.match(html(path), /Fictional example only/i, path + " lacks fictional-proof disclaimer");
}
const output = routes.map(p => html(p)).join("\n");
assert.doesNotMatch(output, /SUPABASE_SERVICE_ROLE_KEY/, "Possible secret name accidentally exposed");
assert.doesNotMatch(output, /PLACEHOLDER:/, "A placeholder has reached a built page");

console.log("OJ Solutions static route and booking checks passed (" + routes.length + " pages).");
