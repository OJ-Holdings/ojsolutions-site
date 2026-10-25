> **October 2026 AI-front-desk enhancement:** The `feat/extend-animated-demo-redesign` branch builds on `redesign` and preserves `src/components/home/CallDemo.astro`'s animated phone conversation and calendar. It adds prominent live demo calling, receptionist capabilities, and approved $797/month + $2,000 setup pricing. Do not substitute the unrelated dark-black concept from PR #2 for the existing navy-and-gold site. Confirm GHL calendar, legal terms, live domain/email, and real demo media before launch.

# OJ Solutions website

The website for OJ Solutions: a home page, one page per service (AI Receptionist, Websites, Commercials), a booking page, Privacy, Terms, and a "page not found" page.

It's built with **Astro** (turns our files into a fast, plain website) and **Tailwind CSS** (the styling). There's no database and no login. Vercel builds the production site from the `main` branch and creates preview deployments for other branches and pull requests.

---

## What's in each folder

| Folder or file | What it is |
| --- | --- |
| `src/config.ts` | **All business info: email, phone, booking links, prices, examples, FAQ answers.** This is the file you'll edit most. |
| `src/pages/` | One file per page. `index.astro` is the home page, `websites.astro` is /websites, and so on. |
| `src/components/` | Reusable pieces used on many pages: header, footer, buttons, FAQ, steps. |
| `src/layouts/` | Page frames. `BaseLayout` wraps every page. `ServiceLayout` is shared by the service pages. |
| `src/lib/` | Small helpers, like the code that decides where "Book a call" goes. |
| `src/styles/global.css` | Brand colors, fonts, and base styles. |
| `src/assets/` | Images the site optimizes for you: the logo mark, and an optional founders photo in `photos/`. |
| `public/` | Files served exactly as they are: favicons, the share image, and demo media in `media/`. |
| `scripts/brand-assets.py` | Rebuilds the logo mark, favicons, and share image from `logo.png`. Only needed if the logo changes. |
| `logo.png` | The master logo file (the OJ mark). |
| `vercel.json` | Vercel settings, like clean addresses (/websites instead of /websites.html). You shouldn't need to touch it. |
| `CLAUDE.md` | The rules Claude Code follows when working on this site (brand, writing rules, booking). |
| `dist/` and `node_modules/` | Created automatically. Don't edit them, and they're never uploaded to GitHub. |

---

## Run the site on your computer

You need **Node.js** (version 22.22 or newer) installed once. Check by typing `node -v` in a terminal.

1. Open a terminal in this folder.
2. The first time only, download the site's building blocks:
   ```bash
   npm install
   ```
3. Start the site:
   ```bash
   npm run dev
   ```
4. Open **http://localhost:4321** in your browser. When you save a file, the page updates by itself.
5. To stop it, click the terminal and press `Ctrl + C`.

Before pushing changes, it's worth running a full build. If it says "Complete!" with no red errors, you're good:

```bash
npm run build
```

---

## Edit business info (`src/config.ts`)

Open `src/config.ts`. Each setting has a comment above it explaining what it does. Change the text between the quotes and save.

**The golden rule:** if a value is empty (`""`, `[]`, or `null`), whatever depends on it is hidden. So you can fill things in whenever you're ready, and the site never shows a broken link or placeholder text.

Common edits:

- **Phone number:** `PHONE: string = "(555) 123-4567";` It appears in the footer and the privacy policy.
- **Booking calendar:** in GoHighLevel, open the calendar, copy its embed code, and paste the link from inside `src="..."` into `GHL_CALENDAR_EMBED`. Every "Book a call" button then goes to /book.
- **Chat widget:** paste the full `<script ...></script>` tag from GoHighLevel into `GHL_CHAT_WIDGET`. (Heads up: chat widgets load a lot of code and will lower the site's speed score a bit.)
- **Show receptionist prices:** set `SHOW_PRICING` to `true`. The prices come from `SETUP_PRICE` and `MONTHLY_PRICE`.
- **"Starting at" prices:** set `WEBSITE_PRICE_FROM` or `COMMERCIAL_PRICE_FROM` to a number, like `1500` (no dollar sign, no quotes).
- **Answer a hidden FAQ question:** fill in its answer under `FAQ_ANSWERS`. The question appears as soon as it has an answer.

### Adding the demo call and screen recording

1. Put the files in `public/media/`, for example `public/media/demo-call.mp3` and `public/media/demo-booking.mp4`.
2. In `src/config.ts`, set `DEMO_AUDIO_SRC = "/media/demo-call.mp3"` and `DEMO_VIDEO_SRC = "/media/demo-booking.mp4"`.
3. Optional but good for accessibility: paste what's said in the call into `DEMO_AUDIO_TRANSCRIPT`.

The players only appear if the file is really there, so a typo just keeps them hidden.

### Adding the founders photo (home page)

1. Put the photo in `src/assets/photos/`, for example `founders.jpg`.
2. In `src/config.ts`, set `FOUNDERS_PHOTO` to `{ file: "founders.jpg", alt: "Jacob and Oscar cleaning a storefront window" }`. The `alt` text describes the photo for people who can't see it. The photo only shows when both are filled in.

### Adding examples of our work

- **Websites:** add entries to `WEBSITE_EXAMPLES`, like
  `{ name: "Our Pressure Washing Co.", url: "https://example.com", description: "Booking site for our own pressure washing business." }`
- **Commercials:** add YouTube links or video IDs to `COMMERCIAL_EXAMPLES`, like `["https://youtu.be/abc123XYZ00"]`. Only the thumbnail loads until someone taps play, so the page stays fast.

Only list real work of ours. The site must never imply we have clients we don't.

### Finding everything still waiting on an answer

Search the code for `TODO(Jacob)`. Each one is a fact the site needs from you. None of them show up on the live site.

### Tracking where bookings come from

Add tags to the links you send in outreach, and they'll show up on the contact in GoHighLevel when that person books:

```
https://yourdomain.com/ai-receptionist?src=ig&rep=jacob
https://yourdomain.com/websites?src=email&rep=oscar&utm_campaign=fall
```

- `src` is where the lead came from (`ig`, `fb`, `email`, `call`, `group`, anything you like).
- `rep` is who reached out (`jacob` or `oscar`).
- Any `utm_` tags work too.

The site remembers these while the person browses, and passes them to the calendar along with which service page they booked from (`service=receptionist`, `website`, or `commercial`). This only works once `GHL_CALENDAR_EMBED` is set. Until then /book shows a placeholder.

---

## Add a new service page

1. Copy `src/pages/websites.astro` and rename the copy, for example `src/pages/seo.astro`. The file name becomes the address: `/seo`.
2. In the copy, change the words: `title`, `description`, `eyebrow`, `heading`, `subhead`, the problem text, the `included` list, the `steps`, and the `faq`.
3. Set `service="..."` to a short new name, like `"seo"`.
4. Open `src/lib/site.ts`, add the new name to `ServiceKey`, and add an entry to `SERVICES` (name, address, one line about the problem it fixes). That adds it to the header menu, the footer, and the home page.
5. Run `npm run build` to check for errors.

Or just ask Claude Code: "Add a service page for X following CLAUDE.md."

---

## How deploys work

The GitHub repo is connected to the Vercel project `ojsolutions-site`.

1. Make changes and check them with `npm run dev` and `npm run build`.
2. Push a branch or open a pull request to get a Vercel preview deployment.
3. Merging to `main` creates a production deployment. Vercel builds with `npm run build` and publishes `dist`.

Vercel uses Node.js 24. The project is configured for Astro, and `SITE_URL` in `src/config.ts` sets the canonical production URL to `https://ojsolutions.org` for search results, the sitemap, and share previews.

### Custom domain DNS

The domain is registered outside Vercel. In the registrar's DNS settings, point the apex (`@`) to Vercel's current A record and `www` to Vercel's current CNAME target. Confirm the exact values in Vercel's **Domains** settings before changing DNS. Keep existing MX and mail-related TXT records so email continues to work. Vercel serves `www.ojsolutions.org` as a redirect to `ojsolutions.org`.

---

## If the logo changes

Replace `logo.png` with the new file (same name), then run:

```bash
python scripts/brand-assets.py
```

That needs Python with Pillow (`pip install pillow`). Or ask Claude Code to regenerate the brand assets.
