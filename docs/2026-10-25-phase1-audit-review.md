# OJ Solutions — Live Site Audit Phase 1 Review

**Source:** founder-supplied “OJ SOLUTIONS — LIVE SITE AUDIT + OVERHAUL PLAN,” October 25, 2026. This is **Phase 1 only**, not a full rebuild. Founder approval is required before merging into the live site.

## Implemented for preview

- Replaced slogan-first homepage H1 with the audit's Option 2: **You're on the job. Your phone still gets answered.** Kept the original brand slogan once, as proof under the hero, while retaining the existing phone animation and Operator Advantage showcase.
- Clarified the demo call simulation, fictional details and possible recording in the hero, call strip, and AI service page.
- Added persistent click-to-call in the sticky header on mobile and desktop, using only `tel:+12624010826`. Compact booking label and logo at narrow mobile widths.
- Centralized current AI Receptionist Pro package list + price FAQ. The home `/pricing`, service `/ai-receptionist` and booking page reference the same offer. Advance modules are marked as separately quoted.
- Preserved the existing **$797/month + $2,000 setup** public price until the founders approve any different tiers. No $297/$597 tier or free/discounted setup was published.
- Added optional, unchecked, consultation-specific SMS consent next to the phone field in `/book`, separate from required contact details. Includes STOP/HELP, message-rate language and Privacy/Terms links. No consent is inferred from a phone number.
- Proposed a coordinated OJ Workspace / Supabase backend change to persist affirmative consent and its timestamp; this change is not deployed.
- Booking remains a **preferred-time request**, with manual founder confirmation. No linked GHL or other calendar and no invented response SLA.
- Preview form submissions are intentionally suppressed until the new consent backend is deployed, preventing a preview from collecting a choice it cannot store.
- Updated Privacy and Terms draft wording to match the proposed form. Legal review required.

## Founder decisions — do not silently guess

- [ ] **Package boundaries:** Approve the `src/lib/receptionist-offer.ts` Core vs Optional lists. In particular, confirm whether missed-call text-back, full CRM pipeline, review requests, and follow-up automations are included or separately quoted.
- [ ] **Pricing:** Keep published $797/month + $2,000 setup for now, or approve precise Starter/Pro pricing and separate deliverables. Audit-proposed $297/$597 and $0–$497 setup are *not approved facts*.
- [ ] **Terms:** Confirm setup timeline, actual contract duration and cancellation rights, data ownership and export/retention details. No specific guarantees are promised.
- [ ] **Call demo:** Confirm the actual expected duration and approve the precise phone-demo instructions; the current copy does not assert an unverified 90-second duration.
- [ ] **Booking:** Confirm a realistic response-time promise, if one can actually be met. Current copy only promises a direct confirmation.
- [ ] **SMS:** Have consent copy and Privacy/Terms reviewed. Confirm who will send any messages and whether text messages are used at all; no SMS is sent by this work.
- [ ] **Testing:** Review 320/360/375/768/1280 widths, keyboard and screen reader, link targets, and real demo line. The technical build passing does not replace this visual and functional QA.

## Release order after approval

1. In the Workspace Supabase project, apply reviewed migration from the companion Workspace PR.
2. Deploy companion Edge Function, validate consent persistence and member-only Workspace reads/updates using synthetic test bookings.
3. Deploy updated Workspace app (Netlify) and verify the Solutions consultation inbox displays affirmative vs negative choices accurately.
4. Merge this website PR to `main` after server readiness and verify the Vercel production domain.
5. Run mobile and conversion smoke tests; rollback if any booking or privacy flow is broken.

**Phase 2 / Phase 3 remain untouched:** Real approved demo audio/transcript and commercial edit, founder photography, verified reviews, schema enhancements, industry pages, font system, analytics/performance pass. Stop for explicit founder approval after each phase.
