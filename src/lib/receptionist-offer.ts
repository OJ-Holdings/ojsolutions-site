import { COST_ANSWER_ALL, PRICE_LINES, PRICING } from "../data/pricing";

/** What the one AI Receptionist plan includes, shown on the receptionist page. */
export const RECEPTIONIST_CORE = [
  { title: "24/7 AI call answering", description: "Answers every call it can, day or night, and identifies itself as AI." },
  { title: "Lead capture", description: "Captures the caller's name, service, address and preferred timeframe." },
  { title: "Estimate booking", description: "Books on-site estimates on your calendar." },
  { title: "Instant owner alerts", description: "You get the lead the moment the call ends, with the recording and transcript." },
  { title: "Missed-call text-back", description: "Sends a text to any caller who doesn't get through." },
  { title: "Reviews and follow-up", description: "Sends review requests and follow-ups so leads don't go cold." },
  { title: "Call and lead reporting", description: "See who called, what they needed and what got booked." },
  { title: "Keep your number", description: "Works with your existing business number. No new number to hand out." },
] as const;

const setupAnswer = "We set your go-live date together on the onboarding call.";
const contractAnswer = "Contract length is set during onboarding based on what your business needs.";
const dataAnswer = "You do. Your recordings, transcripts and contacts are yours, and we'll export them for you if you ever leave.";

const shared = {
  realPerson: { q: "Is it a real person?", a: "No. It identifies itself as an AI assistant at the beginning of every call." },
  newNumber: { q: "Do I need a new phone number?", a: "No. You can keep your business number and configure the AI as overflow or as your front desk." },
  wantsHuman: { q: "What if a caller wants a human?", a: "The AI collects their details and flags the request for a callback." },
  quotes: { q: "Does it quote job prices?", a: "It uses approved service details. The default process is to arrange an estimate, not guess a price." },
  setup: { q: "How long does setup take?", a: setupAnswer },
  contract: { q: "Is there a long contract?", a: contractAnswer },
  data: { q: "Who owns the call data?", a: dataAnswer },
};

/** FAQ for the AI Receptionist page and the trade pages. */
export const RECEPTIONIST_FAQ = [
  shared.realPerson,
  shared.newNumber,
  shared.wantsHuman,
  shared.quotes,
  { q: "What does it cost?", a: `${PRICING.receptionist.name}: ${PRICE_LINES.receptionist} One plan with everything included.` },
  shared.setup,
  shared.contract,
  shared.data,
];

/** FAQ for the home page, which covers all three services. */
export const HOME_FAQ = [
  shared.realPerson,
  shared.newNumber,
  shared.wantsHuman,
  shared.quotes,
  { q: "What does it cost?", a: COST_ANSWER_ALL },
  shared.setup,
  shared.contract,
  shared.data,
  {
    q: "Do you only work with home-service businesses?",
    a: "No. The AI receptionist fits any business that books by phone, and our websites and video ads work for any business.",
  },
];
