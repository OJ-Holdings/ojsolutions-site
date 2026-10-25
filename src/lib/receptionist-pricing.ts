/**
 * Founder-approved Round 2 offer, October 2026.
 * Prices are monthly USD; the one-time setup cost is determined during intake.
 * Never describe the quoted setup range as a waived or fixed $0 fee.
 */
export const RECEPTIONIST_PRICING = {
  currency: "USD",
  setup: { from: 0, to: 497, note: "One-time setup quoted by configuration ($0–$497)." },
  plans: [
    {
      key: "starter",
      title: "Starter",
      price: 297,
      tagline: "Catch the call. Keep the lead.",
      summary: "AI call answering and the essentials to follow up.",
      featured: false,
      features: [
        "AI answers inbound calls and identifies itself",
        "Lead details: name, service, address, timeframe",
        "Owner lead notifications",
        "Call recordings and transcripts",
        "Basic contact records",
      ],
    },
    {
      key: "pro",
      title: "Pro",
      price: 597,
      tagline: "Answer. Schedule. Follow through.",
      summary: "Everything in Starter, plus scheduling and follow-up workflows.",
      featured: true,
      features: [
        "Everything in Starter",
        "On-site estimate scheduling on a configured business calendar",
        "Missed-call text-back (when enabled and consented)",
        "Review-request workflows",
        "Estimate and customer follow-up automation",
        "Call and lead reporting",
      ],
    },
  ],
} as const;

export const RECEPTIONIST_TERMS_NOTICE =
  "Scope, call usage, setup fee, calendar and messaging integrations, contract terms and cancellation conditions are reviewed before purchase.";
