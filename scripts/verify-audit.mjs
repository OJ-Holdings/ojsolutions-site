// Static-built-site release guardrails for the 2026 OJ Solutions audit.
// No network requests, no login, no client data, no new build dependencies.
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const dist = new URL("../dist/", import.meta.url).pathname;
const pages = [];
const excluded = new Set(["404.html"]);
function visit(dir) {
  for (const item of readdirSync(dir,{withFileTypes:true})) {
    const path = join(dir,item.name);
    if (item.isDirectory()) visit(path);
    else if (extname(item.name)===".html" && !excluded.has(item.name)) pages.push(path);
  }
}
visit(dist);
assert.ok(pages.length >= 15, "Unexpectedly few built website pages");
const failures=[];
const warn=[];
const tagAttr=(tag,name)=> {
  const match=tag.match(new RegExp("(?:^|\\s)"+name+"\\s*=\\s*([\"'])(.*?)\\1","i"));
  return match?.[2]??null;
};
const humanPath=path=>path.slice(dist.length-1);
const duplicate=(source,regex)=>(source.match(regex)||[]).length;
const navTargets=new Set();
for (const path of pages) {
  const text=readFileSync(path,"utf8");
  const where=humanPath(path);
  const h1=duplicate(text,/<h1\b/gi);
  if (h1!==1) failures.push(where+": expected one h1, saw "+h1);
  if (!/<html\s[^>]*\blang=["']en["']/i.test(text)) failures.push(where+": html lang=en missing");
  if (!/<meta\s+name=["']description["']/i.test(text)) failures.push(where+": meta description missing");
  if (!/<link\s+rel=["']canonical["']/i.test(text)) failures.push(where+": canonical missing");
  if (!/<main\s+id=["']main["']/i.test(text)) failures.push(where+": main landmark missing");
  for(const img of text.match(/<img\b[^>]*>/gi)||[]) {
    if(tagAttr(img,"alt")===null) failures.push(where+": <img> lacks explicit alt attribute: "+img.slice(0,220));
  }
  for (const tag of text.match(/<video\b[^>]*>/gi)||[]) {
    if(/\sautoplay(?:[\s=>]|$)/i.test(tag) && !/\smuted(?:[\s=>]|$)/i.test(tag))
      failures.push(where+": video autoplays with sound");
    if(tagAttr(tag,"poster")===null) warn.push(where+": video poster not explicit");
  }
  for (const tag of text.match(/<audio\b[^>]*>/gi)||[]) {
    if(/\sautoplay(?:[\s=>]|$)/i.test(tag)) failures.push(where+": autoplay audio is prohibited");
  }
  for (const anchor of text.match(/<a\b[^>]*>/gi)||[]) {
    const href=tagAttr(anchor,"href");
    if(href && href.startsWith("tel:")) {
      if (!["2624010826","12624010826"].includes(href.slice(4).replace(/\D/g,"")))
        failures.push(where+": unapproved tel: link ("+href+")");
      navTargets.add(where);
    }
  }
  const phoneMatches=text.match(/(?:\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]?\d{4}/g)||[];
  for(const value of phoneMatches) {
    if(value.replace(/\D/g,"")!=="2624010826")
      failures.push(where+": possible unapproved visible phone number");
  }
}
for(const expected of ["index.html","book.html","demo.html","about.html","services.html","ai-receptionist.html","commercials.html"]) {
  assert.ok(existsSync(join(dist,expected)), "Missing core route "+expected);
}
assert.ok(navTargets.size>=12, "Too few pages with the authorized demo line");
for(const f of ["robots.txt","sitemap-index.xml","og-image.png"]) {
  assert.ok(existsSync(join(dist,f)), "Missing SEO/asset file "+f);
}
// Static page weight budget: homepage HTML plus referenced local CSS, JS,
// image posters. Videos/audio deliberately excluded because they are not
// required for initial paint and should never preload over mobile data.
const home=readFileSync(join(dist,"index.html"),"utf8");
const resources=new Set();
for(const tag of home.match(/<(?:link|script|img|video)\b[^>]*>/gi)||[]) {
  const ref=tagAttr(tag,"href")||tagAttr(tag,"src")||tagAttr(tag,"poster");
  if (!ref || !ref.startsWith("/") || ref.startsWith("//")) continue;
  const pathname=decodeURIComponent(ref.split("?")[0]);
  const ext=extname(pathname).toLowerCase();
  if([".mp4",".mp3",".webm",".mov"].includes(ext)) continue;
  const file=join(dist,pathname);
  if(existsSync(file) && statSync(file).isFile()) resources.add(file);
}
const initialBytes=Buffer.byteLength(home)+[...resources].reduce((sum,path)=>sum+statSync(path).size,0);
if(initialBytes>2*1024*1024) failures.push("Homepage initial static resource budget exceeds 2 MiB: "+initialBytes);
if(warn.length) console.log("Informational warnings:\n"+warn.slice(0,20).join("\n"));
if(failures.length) {
  console.error("Site audit guardrails FAILED:\n"+failures.join("\n"));
  process.exit(1);
}
console.log("Audit guardrails PASSED:",pages.length,"pages, authorized phone link, h1, alt text, semantics, no autoplay sound.");
console.log("Homepage referenced initial static assets:",initialBytes,"bytes; target under 2 MiB. No Lighthouse measurement claimed.");
