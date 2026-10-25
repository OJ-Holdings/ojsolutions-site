# OJ Solutions — Full-Service Website Expansion Plan
**Prepared:** October 25, 2026  
**Status:** Roadmap only. No unapproved new offers, prices, integrations, or outcomes should be advertised as live.

## Commercial strategy

Preserve the existing navy-and-gold site, original OJ monogram, animated AI call conversation/calendar, and OJ Exterior Care field proof. Keep **AI Receptionist** as the flagship and live phone demo as the primary conversion. Other services must be prominent, discoverable, and independently sellable without diluting the hero.

**Buyer:** owner-operated local home-service businesses (1–15 staff), primarily Kenosha, Racine, and Pleasant Prairie.  
**Primary CTA:** Call live AI demo at `tel:+12624010826`.  
**Secondary CTA:** Book a consultation through the connected GHL calendar when available; until connected, clearly offer email inquiry.

## Service architecture

| Offering | Customer problem | Proposed page | Commercial status |
| --- | --- | --- | --- |
| AI Receptionist Pro | Missed calls and estimates never booked | `/ai-receptionist` | Flagship; $797/month + $2,000 setup per approved brief |
| Missed-call recovery | Leads move on after an unanswered call | `/missed-call-recovery` | Add-on; price/scope TBD |
| CRM & sales pipeline | Leads and estimates fall through the cracks | `/crm` | Add-on; price/scope TBD |
| Online booking & calendar | Customers cannot easily choose an estimate slot | `/booking-automation` | Add-on; price/scope TBD |
| Quote/appointment follow-up | Quotes and reminders are forgotten | `/follow-up-automation` | Add-on; price/scope TBD |
| Review requests & reputation | Business lacks a repeatable, honest review process | `/reputation` | Add-on; price/scope TBD |
| Websites & quote forms | Mobile visitors cannot call, book, or request a quote | `/websites` | Existing standalone service; pricing custom/TBD |
| Commercials & video ads | Trade businesses lack clear local marketing video | `/commercials` | Existing standalone service; pricing custom/TBD |
| Performance reporting | Owners cannot see captured leads and booking volume | `/reporting` | Add-on; price/scope TBD |

**Important:** Don't manufacture additional tier prices or fixed deliverables. Scope all add-ons separately. No invented results, integrations, awards, customers or guarantees.

## Navigation & conversion design

1. **Header:** Existing OJ logo / Services dropdown / prominent "Hear our AI" call action / "Book a call". The Services dropdown should surface AI Receptionist, Websites, Commercials, and a grouped "Automation & Follow-up" entry when that page is ready; keep at most five top-level links.
2. **Home:** Existing animated conversation hero; live demo call action; OJ Exterior Care proof; six AI receptionist features; an expandable behind-the-front-desk stack; supporting Websites and Commercials links; transparent flagship pricing; FAQs; final CTA.
3. **Services index (`/services`):** Group services into **Answer**, **Convert**, **Follow up**, **Get found**. For each: pain point, deliverable, requirements, CTA, and link to a real detail page.
4. **Dedicated service page template:** one problem, brief "what happens", 3-step method, what's included, real proof if any, "who it's for", FAQ, consultation CTA. Include AI demo CTA where applicable.
5. **Proof:** Demonstrate genuine OJ Exterior Care work with the existing cleared field photos and owned commercial video. Use future client results only with verified permission and context.
6. **Forms/booking:** GHL contact/calendars only when real embed is configured. Fields: name, business, phone, trade; affirmative unchecked SMS consent with reviewed legal copy. Don't pretend mailto is a confirmed calendar booking.
7. **Analytics:** Track phone-demo taps, email/booking taps, form submissions, demo audio plays and service-page conversions once approved GA4/Meta IDs are configured. Avoid sending sensitive form contents to trackers.

## Phased delivery

**Phase 0 — publish the current enhancement**
- Preserve existing page layout, phone-text animation and booked-calendar card.
- Publish corrected receptionist prices and live demo number, existing real company proof, expanded service links, and honest lead-capture copy.
- QA the live domain, phone links and booking fallback. Keep uncertain legal/product claims as to-be-confirmed, not public guarantees.

**Phase 1 — make all services discoverable**
- Add /services directory page with clear categories and direct links to existing `/websites`, `/commercials`, `/ai-receptionist`.
- Create a reusable service offering card and mobile-friendly services submenu without crowding the hero.
- Link relevant add-ons back to the AI offer; preserve existing websites and commercials examples.

**Phase 2 — revenue-stack details**
- Build grouped page `/automation` and, as offerings are confirmed, the individual add-on pages listed above.
- Define deliverables and exclusions for each, integration requirements, setup/onboarding expectations, and approved package options.
- Do not fabricate a second pricing tier.

**Phase 3 — proof, leads, and measurement**
- Upload approved real demo MP3 and cleaned fictionalized transcript; make playback opt-in and accessible.
- Add founder/crew photos, approved case studies, and verified testimonials when actually available.
- Connect and test GHL calendar, inquiry workflows, opt-in/consent notices, attribution, and GA4/Meta events.
- Make site refinements based on actual qualified inquiry and booked-demo conversion data.

## Launch/approval dependencies

- Founders to approve the already-configured `ojsolutions.org` domain and `ojsolutionshq@gmail.com` email.
- GHL calendar embed and any SMS consent/recording disclosure language require approval and operational testing.
- Confirm contract/cancellation terms, data ownership, setup timeline, and optional module pricing.
- Review Privacy Policy and Terms with qualified legal counsel as applicable.
- Obtain approved demo recording/transcript and genuine founder photos; verify any Google review count.
- For review requests, avoid filtering customers by satisfaction before offering a public Google review link ("review gating"); solicit honest feedback consistently in line with platform rules.

## Technical execution and release control

- Keep Astro 7, Tailwind CSS, reusable components, the existing GSAP demo, and the Vercel Git integration.
- Preview branch → run `npm run check` and `npm run build` → inspect mobile at 360/375/768 widths → verify call, booking and service links → founder review → merge/release.
- Preserve access to the original working demo and media. No production changes to integrations until verified.
