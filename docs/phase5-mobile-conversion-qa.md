# OJ Solutions Phase 5 — conversion and mobile QA

The independent browser smoke suite lives in `scripts/browser-smoke.mjs` and runs on pull requests and pushes to `main`.

## What it verifies
- The hero still has a primary heading, AI demo call link and the Operator Advantage before/after slider.
- The header call number and consultation request CTA remain visible and on-screen at 320, 360, 375, 768 and 1280 pixels.
- The homepage has no horizontal page overflow at those widths.
- The comparison slider responds to a keyboard arrow press.
- The standalone form never auto-checks SMS consent.
- Form date and time choices activate the submit button, and opting into texts without a phone number shows an error.
- Static preview submissions do not contact production or create fake leads; real production tests require a separately controlled test.
- Screenshots are captured as GitHub Actions artifacts for visual review, not automatically considered evidence of a WCAG or Lighthouse pass.

## Commercial integrity fix
All global and hero consultation CTAs now say **Request** rather than **Book**. Slots are requests awaiting an OJ team member's confirmation; the website is **not** synchronized with an external calendar.

## Remaining site audit work
The browser suite is a smoke check, not an audited Lighthouse, WCAG/axe or real device test. User-provided demo audio, v2 commercial, founder portrait and verified review link/count are not available; they have not been fabricated or published. The Workspace deployment and the complete production booking path still require separate verification.
