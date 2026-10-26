import { existsSync, readFileSync } from "node:fs";
const path = process.argv[2] ?? "test-results/lighthouse-mobile.json";
if (!existsSync(path)) {
  console.error("Mobile Lighthouse report missing.");
  process.exit(1);
}
const audit = JSON.parse(readFileSync(path,"utf8"));
const pct = key => Math.round((audit.categories?.[key]?.score ?? 0) * 100);
const score = {
  performance: pct("performance"),
  accessibility: pct("accessibility"),
  seo: pct("seo"),
};
const auditVal = id => audit.audits?.[id]?.displayValue || "unavailable";
console.log("OJ SOLUTIONS MOBILE LIGHTHOUSE (simulated lab, not CrUX field data)");
console.log(JSON.stringify({
  url: audit.finalUrl,
  ...score,
  firstContentfulPaint: auditVal("first-contentful-paint"),
  largestContentfulPaint: auditVal("largest-contentful-paint"),
  cumulativeLayoutShift: auditVal("cumulative-layout-shift"),
  totalBlockingTime: auditVal("total-blocking-time"),
  speedIndex: auditVal("speed-index"),
}, null, 2));
const incomplete = Object.entries(score).filter(([,number])=>number===0);
if(incomplete.length){
  console.error("Lighthouse categories missing or invalid: "+incomplete.map(([k])=>k).join(", "));
  process.exit(1);
}
const below = Object.entries({performance:90, accessibility:95, seo:95})
  .filter(([k,target])=>score[k]<target);
if (below.length) {
  console.log("AUDIT TARGETS NOT YET MET (follow-up issues): "+below.map(([k,t])=>k+" "+score[k]+"/"+t).join(", "));
  // The first pass captures a baseline. Don't pretend it passed the targets.
  // Do not block unrelated correctness fixes pending performance optimization.
} else {
  console.log("AUDIT TARGETS MET for this Lighthouse lab run.");
}
