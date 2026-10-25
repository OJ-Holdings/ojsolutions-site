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
