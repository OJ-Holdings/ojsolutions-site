import { COST_ANSWER_ALL, PRICE_LINES, PRICING } from "../data/pricing";
import { PHONE } from "../config";
import type { IconName } from "../components/Icon.astro";

/** "What's included" on the receptionist page: eight items, 2 by 4. */
export const RECEPTIONIST_CORE: { icon: IconName; title: string; body: string }[] = [
  { icon: "clock", title: "24/7 answering", body: "Picks up day or night and identifies itself as AI." },
  { icon: "user", title: "Lead capture", body: "Gets the caller's name, service, address and timeframe." },
  { icon: "calendar", title: "Estimate booking", body: "Books estimates straight onto your calendar." },
  { icon: "bell", title: "Instant owner alerts", body: "You hear about every new lead the moment the call ends." },
  { icon: "mic", title: "Recordings and transcripts", body: "Listen back or skim the transcript of any call." },
  { icon: "message", title: "Missed-call text-back", body: "Texts back any caller who doesn't get through." },
  { icon: "star", title: "Review requests and follow-ups", body: "Asks happy customers for reviews and follows up on open estimates." },
  { icon: "chart", title: "Call and lead reporting", body: "See who called, what they needed and what got booked." },
];

const otherIndustries = {
  q: "Do you only work with home-service businesses?",
  a: "No. The AI receptionist fits any business that books by phone, and our websites and video ads work for any business.",
};

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
  otherIndustries,
  { q: "Does it work with my calendar?", a: "Yes. We connect it to your Google or Outlook calendar during setup." },
  { q: "Can I hear it before I pay?", a: `Yes. Call ${PHONE} anytime.` },
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
  otherIndustries,
];
