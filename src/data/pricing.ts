// Every price on the site. Pages and components read from here, so a price
// change is one edit in this file. All amounts are USD.

/** 1497 -> "$1,497" */
export function money(amount: number): string {
  return "$" + amount.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

export const PRICING = {
  receptionist: {
    name: "AI Receptionist",
    monthly: 497,
    setup: 497,
    /** Short starting price for cards. */
    from: "$497/mo",
    includes: [
      "Answers 24/7 and identifies itself as AI",
      "Captures name, service, address and timeframe",
      "Books estimates on your calendar",
      "Instant owner alerts",
      "Call recordings and transcripts",
      "Missed-call text-back",
      "Review requests",
      "Follow-up automation",
      "Call and lead reporting",
      "Keep your existing number",
    ],
  },
  website: {
    name: "Websites",
    build: {
      price: 1497,
      pages: 5,
    },
    care: {
      monthly: 49,
      includes: "Hosting, security and small edits",
    },
    monthlyPlan: {
      monthly: 197,
      down: 0,
      minimumMonths: 12,
      includes: "Hosting, security and edits included",
      ownership: "The site is yours after 12 months.",
    },
    from: "$1,497 or $197/mo",
  },
  video: {
    name: "Video Ads",
    single: 297,
    contentPlan: {
      monthly: 497,
      videos: 8,
      term: "Month to month",
    },
    from: "From $297 per ad",
  },
} as const;

const { receptionist: r, website: w, video: v } = PRICING;

/** One-line price summaries, reused by FAQs and cards. */
export const PRICE_LINES = {
  receptionist: `${money(r.monthly)}/month plus a one-time ${money(r.setup)} setup.`,
  website: `${money(w.build.price)} one-time for up to ${w.build.pages} pages, with an optional ${money(w.care.monthly)}/month Care plan. Or ${money(w.monthlyPlan.monthly)}/month with ${money(w.monthlyPlan.down)} down and a ${w.monthlyPlan.minimumMonths}-month minimum.`,
  video: `${money(v.single)} for a single ad, or ${money(v.contentPlan.monthly)}/month for ${v.contentPlan.videos} edited short videos, month to month.`,
};

/** The "What does it cost?" answer that covers all three services. */
export const COST_ANSWER_ALL =
  `AI Receptionist: ${PRICE_LINES.receptionist} Websites: ${PRICE_LINES.website} Video ads: ${PRICE_LINES.video}`;
