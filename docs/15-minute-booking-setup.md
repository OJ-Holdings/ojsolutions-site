# Activate 15-minute consultations on ojsolutions.org

The website already supports a native GoHighLevel embedded calendar in `src/pages/book.astro` — not a fake time-slot picker. The current `GHL_CALENDAR_EMBED` and `BOOKING_URL` settings in `src/config.ts` are blank. Until a real calendar URL is configured, the public page offers an email request (not a confirmed appointment).

## Required steps
1. In OJ Solutions GoHighLevel sub-account create a dedicated **15-Minute OJ Solutions Consultation** calendar. Duration = 15 minutes; timezone = America/Chicago; configure availability, staff, conflicts, buffers and minimum lead time.
2. Copy the full GoHighLevel booking embed URL. Add it to `src/config.ts` as `GHL_CALENDAR_EMBED`; or set `BOOKING_URL` for an external booking page. This URL is public booking configuration (not a secret token). Do not paste a private integration token into the website.
3. Configure GHL to capture first/last name, phone, email, business, requested service and inquiry. Add appropriate reviewed consent if SMS notifications are enabled. Create/update the CRM opportunity on booking, keyed by contact/appointment ID to avoid duplicates.
4. OJ Workspace's Solutions CRM viewer already reads GHL contacts and opportunities. The companion change in its `feat/solutions-booking-appointments-2026` branch adds upcoming calendar appointments via a server-only `GHL_BOOKING_CALENDAR_ID`; it requires the same GHL calendar ID and the existing read-only GHL token+location.
5. Test new customer booking, availability conflict, cancel/reschedule, confirmation and appearance in OJ Workspace; only then publish calendar configuration.

## Public website behavior
- If native iframe calendar exists: show booking slots and form and pass approved query/UTM tags.
- If an external booking URL exists: show "See available times" link.
- If neither exists: explain that online scheduling is not connected and offer a 15-minute call request by email.
- Never treat click on `/book` or email request as an actual confirmed booking.

## Trust and safety
Don't collect sensitive payment data in site forms. Don't expose GHL API keys in browser code or repo. Use consent, rate limiting and deduplication in GHL workflows as appropriate. Avoid automatic SMS absent proper affirmative consent. Confirm domain, business email, Privacy, Terms and recording disclosures before launch.

## What isn't done yet
The necessary GHL calendar ID/embed URL, account-side workflow, and an actual end-to-end test booking aren't available from the repository, so real-time booking and workspace ingestion are not verified.
