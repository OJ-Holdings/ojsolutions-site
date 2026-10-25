# OJ Solutions website — development rules

## Source of truth

The founders approved the **AI-front-desk-first website master brief** on October 25, 2026. These instructions supersede the former three-equal-services positioning in this repository. Keep all facts grounded in the founders' brief and any verified repository configuration. Do not invent clients, testimonials, metrics, guarantees, deadlines, domains, pricing tiers, or integrations.

## Positioning

OJ Solutions is an AI front-desk agency based in Kenosha, Wisconsin. Its flagship offer is an AI receptionist for home-service businesses (usually owner-operated, 1–15 employees) that answers calls, identifies itself as AI, captures caller details, books available on-site estimate slots, and alerts the owner. The founders run OJ Exterior Care and built the system for their own business first.

**Brand:** OJ Solutions · Your AI front desk. / Built by business owners, for business owners.
**Primary action:** call the demo at **(262) 401-0826**, linking to \`tel:+12624010826\`.
**Secondary action:** book/request a 15-minute consultation.
**Geography:** Kenosha, Racine, Pleasant Prairie, and southeast Wisconsin. Do not imply national coverage.
**Pricing:** AI Receptionist Pro, **$797/month**, **$2,000 one-time setup**. Don't invent other tiers, trials, discounts, or guarantees.

## Offer hierarchy

1. AI receptionist is the flagship and the focus of the homepage.
2. Behind-the-front-desk modules are addons/configurable options: missed-call recovery, CRM/pipeline, online booking, review requests, follow-ups, websites/forms, reports.
3. The earlier service pages for Websites and Commercials remain in the repository for continuity; do not present them as equal flagship offers on the AI-first homepage.

## Voice and trust

Plainspoken owner-to-owner, short sentences. Focus on answered calls, captured leads, and booked estimates, never vague technology buzzwords. The AI discloses that it's an AI assistant. Avoid definitive 100% uptime, job guarantees, and quoting job prices. The default workflow is to book an on-site estimate, not invent a price.

The live phone demo and OJ Exterior Care are the available proof. There are **no verified external testimonials or customer results** to publish. An illustrative caller named Mike Reynolds is fictional. Do not publish any real customer's identifying details. The historical 16 five-star OJ Exterior Care review count must be reverified before use.

## Design system

- Ink \`#0A0A0C\`, bone \`#F4F1EA\`, gold \`#C4A452\`, secondary navy \`#12203A\`, muted steel \`#8A93A0\`.
- Green \`#1FBF6B\` is for answered/booked states; red \`#E5484D\` only for missed-call alerts. No decorative stoplight palette.
- Inter Tight, Instrument Serif (editorial italic), JetBrains Mono (small labels).
- Premium, tactical, cinematic, restrained. No glowing robots, purple AI imagery, stock call-center staff, invented photos, or fabricated company marks.
- Use the **existing actual logo** under \`src/assets/brand/oj-mark.png\` or public icons. Do not redraw the monogram.
- Mobile-first at 360px, WCAG AA, keyboard access, visible focus, reduced-motion support, no autoplay sound.
- Aim for Lighthouse 90+ and fast mobile loading; do not claim those targets were achieved until measured.

## Build details

- Keep Astro 7 + Tailwind CSS 4 and the existing project structure. Vercel builds from GitHub and \`main\` is production. Do not merge or deploy to production without approval.
- The AI-front-desk home page in \`src/pages/index.astro\` has a scoped visual system and custom site chrome. \`BaseLayout\` supports \`hideChrome\` so other pages can retain their old shared header/footer during migration.
- \`src/config.ts\` holds pricing, phone, demo MP3, booking data, and site configuration. If demo audio is absent, invite people to call the live demo rather than rendering a broken player.
- \`/ai-receptionist\` remains a valid supporting page with the same offer and prices. Additional \`/demo\`, \`/how-it-works\`, \`/pricing\`, \`/about\` routes can be built after homepage review.
- Booking currently falls back to an email request when no GoHighLevel calendar or booking URL is configured. Never imply the calendar is connected before it is.
- Tracking hooks on the new homepage emit \`demo_call_tap\`, \`booking_tap\`, and \`demo_audio_play\` to a dataLayer/gtag **only when those analytics integrations are present**.

## Founder confirmation and launch blockers

**Must confirm before production release:**
- \`SITE_URL\` currently says \`https://ojsolutions.org\`; the new brief specifically left \`[DOMAIN]\` unconfirmed. Do not treat the old config as new founder approval.
- \`EMAIL\` currently says \`ojsolutionshq@gmail.com\`; get approval before it is presented as the official business email.
- GHL booking calendar and/or approved booking URL, with legally reviewed consent language.
- Actual logo SVG and genuine field photos if available, plus approved demo MP3 and approved fictionalized transcript.
- Contract duration, cancellation, data ownership, setup time.
- Privacy/Terms, recording disclosures and SMS/A2P consent reviewed for applicable law.
- GA4/Meta Pixel IDs if analytics are desired.
- Reverify any published review count.

Bracketed placeholders must stay clearly labeled in a preview; eliminate them or replace them with approved content before production.
