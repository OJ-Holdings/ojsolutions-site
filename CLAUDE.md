# Approved update: three equal services (2026-10-28)

Pricing is settled with Oscar. This block matches the live site and overrides anything below that disagrees with it. **Keep the navy-and-gold visual language, the GSAP call demo, the booking calendar, and the real OJ Exterior Care imagery.** Extend the site rather than rebuilding it.

- Three equal services: AI receptionist, websites and video ads. None eclipses the others, and the home page covers all three.
- No location focus anywhere on the site: no city or region names and no street addresses. Structured data uses areaServed United States.
- `src/data/pricing.ts` is the source of truth for every price, and every page reads from it. Current prices:
  - AI receptionist: $497/month plus a one-time $497 setup.
  - Websites: $1,497 one-time (optional $49/month Care plan), or $197/month with $0 down and a 12-month minimum.
  - Video ads: $297 per ad, or $497/month for 8 videos.
- No guarantee, discount or cancellation promise is approved.
- Every page's main conversion is Request a call (/book). The live AI line, tel:+12624010826 shown as (262) 401-0826, sits in the header and leads the AI receptionist pages. The demo animation is fictional sample data, not an actual recording.
- The AI must introduce itself as AI in example dialogue. Lead details: name, address, service, timeframe. Schedule on-site estimates instead of quoting unverified prices.
- Video ads: we don't film. The client sends the idea and their own clips, and we edit them into finished ads in every format.
- GSAP is allowed on the service pages as well as the homepage. Every animation respects prefers-reduced-motion.
- Do not invent customer proof, guarantees, achievements or client results. Contract terms and timelines appear only as stated in `pricing.ts` and approved page copy. Keep any existing true photos and mark examples as our own business.
- Existing canonical domain and contact email remain configured, but the founders must confirm they are ready to publish. GHL calendar, real approved recording, transcripts and legal terms remain launch blockers.
- Preserve Astro + Tailwind, existing reusable components, and accessible reduced-motion behavior. Changes go through a PR; do not push to the production branch without review.

---

# OJ Solutions website

Rules for every Claude Code session working on this repo (Jacob's or Oscar's). `AGENTS.md` carries the same rules for Codex sessions, so change both together. Follow them for every change, including small copy edits.

## About the business

OJ Solutions fixes what's slowing businesses down. We sell three done-for-you services:

1. AI Receptionist: answers your calls 24/7, answers questions, quotes from the owner's pricing, books the appointment onto their calendar, creates the contact in a CRM, and texts back missed calls. It handles most calls on its own and transfers anything it can't handle to the owner's phone or staff. Runs on GoHighLevel. We set it up and manage it.
2. Websites: new sites or rebuilds, built for phones first, with click-to-call and booking built in.
3. Video ads (the page lives at /commercials; the nav calls it "Video Ads"): we don't film. The client tells us the idea and sends their own clips (phone footage is fine), and we edit them into finished ads with a hook, cuts, captions, music and motion graphics, in every format for social media, websites and paid ads. Never write copy that implies we shoot on location ("we film", "shot list", "on camera").

We serve any business of any size. The founders are Jacob and Oscar. We also run our own pressure washing and window cleaning company, and we built and tested all of this on our own business first. That is our story and our reason to be trusted. We currently have zero clients.

## Who visits and why

Most visitors come from our cold calls, cold emails, Instagram and Facebook DMs, and Facebook group posts. They're usually on a phone, checking whether we're legit. Every outreach message pitches ONE service and links to that service's page, so each service page must work on its own as a landing page. Every page has one conversion: book a call.

## Tech

- Astro (latest stable) + Tailwind CSS, fully static output. No backend, no database, no CMS.
- Hosted on Vercel from GitHub (live at ojsolutions.org). The `ojsolutions-site` Vercel project builds with `npm run build`, publishes `dist`, and uses Node.js 24. `vercel.json` holds the Vercel settings (clean URLs, response headers). Vercel already serves `/_astro/*` with a one-year immutable cache, so don't add one. Netlify is not used anymore.
- Mobile-first. Design at 375px wide first, then scale up.
- Fast: minimal JS, optimized images. Target Lighthouse 95+ on mobile. This site is also our portfolio for the website service, so it has to be fast and clean.
- Motion: GSAP is allowed on the homepage and the service pages, loaded on demand. On /commercials it drives the pinned "Watch your clips become an ad" timeline (`src/components/commercials/`). Every other page stays animation-library-free and uses CSS. All motion respects prefers-reduced-motion, and every animated section has a static version for phones, reduced motion and no JavaScript.
- Accessible: semantic HTML, alt text, visible focus states, WCAG AA contrast.
- SEO: unique title and meta description per page, an Open Graph image (navy background, OJ mark, "Built by business owners, for business owners."), @astrojs/sitemap, robots.txt.
- The three service pages share one reusable ServiceLayout, so adding a service later is one new page.
- All editable business info lives in one file, `src/config.ts`: BUSINESS_NAME, LEGAL_ENTITY, EMAIL, PHONE, BOOKING_URL, GHL_CALENDAR_EMBED, GHL_CHAT_WIDGET, DEMO_AUDIO_SRC, DEMO_VIDEO_SRC, STATS_SOURCE_URL, GUARANTEE_TEXT, WEBSITE_EXAMPLES, COMMERCIAL_EXAMPLES, SHOOT_AREA, social links, and the FAQ answers still owed. Unknown values stay empty. Every price lives in `src/data/pricing.ts`, and every page reads prices from there.
- If a config value is empty, hide whatever depends on it. Visitors never see a broken link or an empty player.
- Answers Jacob still owes are tracked in `PLACEHOLDERS.md` and as TODO(Jacob) comments. Don't add visible "PLACEHOLDER:" boxes to any page; they were removed on purpose. Hide whatever depends on a missing answer, and never fill one with made-up content.
- The demo call recording is `public/audio/demo-call.mp3` (DEMO_AUDIO_SRC). It plays in the flat `AudioPlayer` component in the "Hear it first" panel on /ai-receptionist.

## Booking and tracking

- Every "Book a call" button goes to /book. (Logic: `bookingHref` in `src/lib/site.ts`.) /book shows the GHL calendar when GHL_CALENDAR_EMBED is set, a button to BOOKING_URL when only that is set, and otherwise a way to book by email. The email address is always shown plainly.
- Buttons on service pages add ?service=receptionist, ?service=website, or ?service=commercial. Home page buttons add nothing.
- /book shows the embedded GHL calendar and passes the page's full query string (service, src, rep, and any utm_ tags) through to the calendar embed URL, so those tags land on the contact in GHL.
- Outreach links point at a service page and may carry src, rep, and utm_ tags (e.g. /ai-receptionist?src=ig&rep=jacob). A small script in BaseLayout remembers those tags for the visit and adds them to every Book a call link, so they still reach /book after the visitor clicks around.
- If GHL_CHAT_WIDGET is set, that script is injected on every page.

## Brand

- Colors: Navy #0B1F3A (primary), Gold #C4A452 (accent), White #FFFFFF (background). Neutrals only for secondary text (#4A5568) and borders (#E5E7EB). No other colors, except the small red REC dot on the /commercials editing-suite visuals. (Tailwind's default palette is switched off in `src/styles/global.css`; use `navy`, `gold`, `white`, `muted`, `line`.)
- Gold fails contrast as text on white, so never use it as text on white. Gold is for small accents (rules, icons, underline highlights) and for text or buttons on navy.
- Buttons: navy background with white text on white sections; gold background with navy text on navy sections.
- Flat only. No gradients, glows, drop shadows, glassmorphism, blur, neon, purple, or stock photos. Whitespace and 1px borders do the work. Corner radius 8px max.
- Fonts: Montserrat for headings (it matches the logo wordmark), Inter for body. Self-hosted with @fontsource.
- Logo: `logo.png` in the project root is the master file and is just the OJ mark. `scripts/brand-assets.py` makes the transparent mark (`src/assets/brand/oj-mark.png`), the favicons (32px, 180px apple-touch, 512px), and the share image from it. In the header, use the mark image plus "OJ Solutions" as live text in Montserrat (OJ bold, Solutions medium). The mark is navy, so it only sits on white. Never alter the logo design itself.

## Writing rules (every word on the site)

- Business owners talking to business owners. Plain, short, confident. Never sound like an agency.
- No em dashes anywhere. Never use: leverage, seamless, cutting-edge, revolutionize, game-changer, unlock, elevate, supercharge, "in today's fast-paced world."
- Never invent anything: no testimonials, reviews, star ratings, client logos, "trusted by" claims, results numbers, or stats. We have zero clients and the site cannot imply otherwise. "Our work" sections show only our own real projects.
- The only stats allowed, and only on /ai-receptionist: in a 2025 CallRail survey of 1,000 consumers, 78% said they've abandoned a business after an unanswered call and 82% said they'd call a competitor instead. They must show a visible source link from STATS_SOURCE_URL. If that is empty, hide the stats.
- Each service page has one enemy. Receptionist: missed calls leaking leads the owner already paid for. Websites: a site that loses visitors. Video ads: being invisible in the feed. The home page covers all three without making any one the whole story. Never trash agencies or competitors.
- Never say the AI replaces staff or answers 100% of calls. It handles most calls and sends the rest to the owner.
- If something needs a fact we haven't given you, leave a TODO(Jacob) comment in the code and keep it off the rendered page. Do not guess.

## Working in this repo

- `npm run dev` starts the local site at http://localhost:4321. `npm run build` must finish with no errors before anything is pushed.
- Pushing to `main` deploys to production on Vercel. Every other pushed branch gets its own Vercel preview link. Don't push without being asked.
- Where things live: business info in `src/config.ts`; prices in `src/data/pricing.ts`; link and booking helpers in `src/lib/site.ts`; shared page pieces in `src/components/`; page frames in `src/layouts/` (`BaseLayout` for every page, `ServiceLayout` for service pages); pages in `src/pages/`.
- To find everything still waiting on an answer: search the code for `TODO(Jacob)`.
