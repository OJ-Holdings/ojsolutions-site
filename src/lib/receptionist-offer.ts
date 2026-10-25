import { MONTHLY_PRICE, SETUP_PRICE } from "../config";
import { formatPrice } from "./site";

/**
 * Single commercial source for the existing AI Receptionist Pro offer.
 * The founders have NOT approved Starter / Pro tier changes or addon pricing.
 * Keep this in sync with the website master brief and contract when approved.
 */
export const RECEPTIONIST_CORE = [
  {
    title: "24/7 AI call answering",
    description: "Answers when you are working or closed, and clearly identifies itself as an AI assistant.",
  },
  {
    title: "Lead capture",
    description: "Collects the caller's name, service, address and preferred timeframe.",
  },
  {
    title: "On-site estimate scheduling",
    description: "Schedules available estimate appointments on the agreed business calendar.",
  },
  {
    title: "Owner lead notifications",
    description: "Sends captured call information to the business owner for follow-up.",
  },
  {
    title: "Recordings and transcripts",
    description: "Stores call history so you can review what was discussed.",
  },
  {
    title: "Basic contact records",
    description: "Stores caller details; a configured sales pipeline is a separately scoped service.",
  },
  {
    title: "Business-specific setup",
    description: "Configured for your hours, service area and call-routing preferences.",
  },
] as const;

export const RECEPTIONIST_OPTIONAL_MODULES = [
  {
    title: "Missed-call text-back",
    description: "Automated replies for unanswered calls, subject to approved messaging consent and configuration.",
  },
  {
    title: "Advanced CRM and pipeline",
    description: "Track the sales process from new inquiry to booked estimate and won or lost.",
  },
  {
    title: "Review requests",
    description: "Request honest reviews after completed work.",
  },
  {
    title: "Follow-up workflows",
    description: "Estimate follow-ups, appointment reminders and customer reactivation messages.",
  },
  {
    title: "Website and quote forms",
    description: "Make it easy for website visitors to request service.",
  },
  {
    title: "Performance reporting",
    description: "Review call activity, lead capture and bookings.",
  },
] as const;

export const RECEPTIONIST_TERMS_NOTICE =
  "Final setup timeline, service agreement, cancellation and data terms are reviewed before purchase.";

/** Keep the published home and receptionist service-page FAQs identical. */
export const RECEPTIONIST_FAQ = [
  { q: "Is it a real person?", a: "No. It identifies itself as an AI assistant at the beginning of every call." },
  { q: "Do I need a new phone number?", a: "No. You can keep your business number and configure the AI as overflow or as your front desk." },
  { q: "What if a caller wants a human?", a: "The AI collects their details and flags the request for a callback." },
  { q: "Does it quote job prices?", a: "It uses your approved service details. The default workflow is to book an on-site estimate, not guess a price." },
  { q: "What does it cost?", a: `AI Receptionist Pro is ${formatPrice(MONTHLY_PRICE)} per month with a ${formatPrice(SETUP_PRICE)} one-time setup fee. Missed-call text-back, advanced CRM pipelines and other optional modules are quoted separately.` },
  { q: "How long does setup take?", a: "We confirm your setup timeline after reviewing your call flow and business requirements." },
  { q: "Is there a long contract?", a: "We'll review the full contract and cancellation terms before you sign." },
  { q: "Where are you based?", a: "Kenosha, Wisconsin. We focus on local service businesses across southeast Wisconsin." },
  { q: "Who owns the call data?", a: "Data access, retention, export and ownership will be set out in the service agreement before purchase." },
];
