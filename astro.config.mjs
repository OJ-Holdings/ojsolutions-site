// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { SITE_URL } from "./src/config.ts";

// The site's address, used for the sitemap and share previews.
// 1. SITE_URL from src/config.ts, once there's a domain
// 2. otherwise the address Netlify gives the site (set automatically on Netlify)
// 3. otherwise localhost, for running it on your computer
const site = SITE_URL.trim() || process.env.URL || "http://localhost:4321";

export default defineConfig({
  site,
  // Pages live at /websites, not /websites/ (no redirect hop on phones).
  trailingSlash: "never",
  build: {
    format: "file",
    // Put the CSS straight into each page so nothing blocks the first paint.
    inlineStylesheets: "always",
  },
  // No Astro toolbar floating over the page while you preview locally.
  devToolbar: { enabled: false },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
