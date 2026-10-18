# OJ Solutions website

Rules for every Claude Code session working on this repo (Jacob's or Oscar's). Follow them for every change, including small copy edits.

## About the business

OJ Solutions fixes what's slowing businesses down. We sell three done-for-you services:

1. AI Receptionist: answers every call 24/7, answers questions, quotes from the owner's pricing, books the appointment onto their calendar, creates the contact in a CRM, and texts back missed calls. It handles most calls on its own and transfers anything it can't handle to the owner's phone or staff. Runs on GoHighLevel. We set it up and manage it.
2. Websites: new sites or rebuilds, built for phones first, with click-to-call and booking built in.
3. Commercials: video ads and commercials for social media, websites, and paid ads. We plan, film, and edit.

We serve any business of any size. The founders are Jacob and Oscar. We also run our own pressure washing and window cleaning company, and we built and tested all of this on our own business first. That is our story and our reason to be trusted. We currently have zero clients.

## Who visits and why

Most visitors come from our cold calls, cold emails, Instagram and Facebook DMs, and Facebook group posts. They're usually on a phone, checking whether we're legit. Every outreach message pitches ONE service and links to that service's page, so each service page must work on its own as a landing page. Every page has one conversion: book a call.

## Tech

- Astro (latest stable) + Tailwind CSS, fully static output. No backend, no database, no CMS.
- Hosted on Netlify from GitHub. `netlify.toml` sets build command `npm run build` and publish dir `dist`.
- Mobile-first. Design at 375px wide first, then scale up.
- Fast: no animation libraries, minimal JS, optimized images. Target Lighthouse 95+ on mobile. This site is also our portfolio for the website service, so it has to be fast and clean.
- Accessible: semantic HTML, alt text, visible focus states, WCAG AA contrast.
- SEO: unique title and meta description per page, an Open Graph image (navy background, OJ mark, "Built by business owners, for business owners."), @astrojs/sitemap, robots.txt.
- The three service pages share one reusable ServiceLayout, so adding a service later is one new page.
- All editable business info lives in one file, `src/config.ts`: BUSINESS_NAME, LEGAL_ENTITY, EMAIL, PHONE, BOOKING_URL, GHL_CALENDAR_EMBED, GHL_CHAT_WIDGET, DEMO_AUDIO_SRC, DEMO_VIDEO_SRC, STATS_SOURCE_URL, GUARANTEE_TEXT, SHOW_PRICING, SETUP_PRICE, MONTHLY_PRICE, WEBSITE_PRICE_FROM, COMMERCIAL_PRICE_FROM, WEBSITE_EXAMPLES, COMMERCIAL_EXAMPLES, SHOOT_AREA, social links, and the FAQ answers still owed. Unknown values stay empty.
- If a config value is empty, hide whatever depends on it. Visitors never see a broken link, an empty player, or placeholder text.

## Booking and tracking

- Every "Book a call" button goes to /book when GHL_CALENDAR_EMBED is set, otherwise to BOOKING_URL. If neither is set, it links to mailto:EMAIL. (Logic: `bookingHref` in `src/lib/site.ts`.)
- Buttons on service pages add ?service=receptionist, ?service=website, or ?service=commercial. Home page buttons add nothing.
- /book shows the embedded GHL calendar and passes the page's full query string (service, src, rep, and any utm_ tags) through to the calendar embed URL, so those tags land on the contact in GHL.
- Outreach links point at a service page and may carry src, rep, and utm_ tags (e.g. /ai-receptionist?src=ig&rep=jacob). A small script in BaseLayout remembers those tags for the visit and adds them to every Book a call link, so they still reach /book after the visitor clicks around.
- If GHL_CHAT_WIDGET is set, that script is injected on every page.

## Brand

- Colors: Navy #0B1F3A (primary), Gold #C4A452 (accent), White #FFFFFF (background). Neutrals only for secondary text (#4A5568) and borders (#E5E7EB). No other colors. (Tailwind's default palette is switched off in `src/styles/global.css`; use `navy`, `gold`, `white`, `muted`, `line`.)
- Gold fails contrast as text on white, so never use it as text on white. Gold is for small accents (rules, icons, underline highlights) and for text or buttons on navy.
- Buttons: navy background with white text on white sections; gold background with navy text on navy sections.
- Flat only. No gradients, glows, drop shadows, glassmorphism, blur, neon, purple, or stock photos. Whitespace and 1px borders do the work. Corner radius 8px max.
- Fonts: Montserrat for headings (it matches the logo wordmark), Inter for body. Self-hosted with @fontsource.
- Logo: `logo.png` in the project root is the master file and is just the OJ mark. `scripts/brand-assets.py` makes the transparent mark (`src/assets/brand/oj-mark.png`), the favicons (32px, 180px apple-touch, 512px), and the share image from it. In the header, use the mark image plus "OJ Solutions" as live text in Montserrat (OJ bold, Solutions medium). The mark is navy, so it only sits on white. Never alter the logo design itself.

## Writing rules (every word on the site)

- Business owners talking to business owners. Plain, short, confident. Never sound like an agency.
- No em dashes anywhere. Never use: leverage, seamless, cutting-edge, revolutionize, game-changer, unlock, elevate, supercharge, "in today's fast-paced world."
- Never invent anything: no testimonials, reviews, star ratings, client logos, "trusted by" claims, results numbers, or stats. We have zero clients and the site cannot imply otherwise. "Our work" sections show only our own real projects from config.
- The only stats allowed, and only on /ai-receptionist: in a 2025 CallRail survey of 1,000 consumers, 78% said they've abandoned a business after an unanswered call and 82% said they'd call a competitor instead. They must show a visible source link from STATS_SOURCE_URL. If that is empty, hide the stats.
- Each service page has one enemy. Receptionist: missed calls leaking leads the owner already paid for. Websites: a site that loses visitors. Commercials: being invisible in the feed. The home page covers all three without making any one the whole story. Never trash agencies or competitors.
- Never say the AI replaces staff or answers 100% of calls. It handles most calls and sends the rest to the owner.
- If something needs a fact we haven't given you, leave a TODO(Jacob) comment in the code and keep it off the rendered page. Do not guess.

## Working in this repo

- `npm run dev` starts the local site at http://localhost:4321. `npm run build` must finish with no errors before anything is pushed.
- Pushing to `main` deploys to Netlify automatically. Don't push without being asked.
- Where things live: business info in `src/config.ts`; link and booking helpers in `src/lib/site.ts`; shared page pieces in `src/components/`; page frames in `src/layouts/` (`BaseLayout` for every page, `ServiceLayout` for service pages); pages in `src/pages/`.
- To find everything still waiting on an answer: search the code for `TODO(Jacob)`.
