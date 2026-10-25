import { RECEPTIONIST_PRICING, RECEPTIONIST_TERMS_NOTICE } from "./receptionist-pricing";
export { RECEPTIONIST_TERMS_NOTICE } from "./receptionist-pricing";

/** The combined capability list displayed on the receptionist detail page. */
export const RECEPTIONIST_CORE = [
  { title: "24/7 AI call answering", description: "Configured AI receptionist that identifies itself to callers." },
  { title: "Lead capture and contact records", description: "Capture caller name, service, address and preferred timeframe." },
  { title: "Call history and owner alerts", description: "Lead notifications with recordings, transcripts and basic contact details." },
  { title: "Estimate scheduling with Pro", description: "Schedule on-site estimates on a configured business calendar." },
  { title: "Missed-call text-back with Pro", description: "Follow up on unanswered calls when configured and consented." },
  { title: "Review and estimate follow-ups with Pro", description: "Configure review requests and follow-up automations around your workflow." },
  { title: "Reporting with Pro", description: "Review call and captured-lead activity." },
] as const;

/** Additional services outside the two advertised plans. */
export const RECEPTIONIST_OPTIONAL_MODULES = [
  { title: "Advanced CRM and pipeline", description: "Track opportunities from inquiry to closed job with a separately configured sales pipeline." },
  { title: "Custom automation integrations", description: "Scope extra tools, messaging and cross-system workflows for your business." },
  { title: "Websites and quote forms", description: "Give site visitors a clear path to contact your team and request service." },
  { title: "Commercials and video advertising", description: "Present real work through professionally produced video assets." },
] as const;

export const RECEPTIONIST_FAQ = [
  { q:"Is it a real person?", a:"No. It identifies itself as an AI assistant at the beginning of every call." },
  { q:"Do I need a new phone number?", a:"No. You can keep your business number and configure the AI as overflow or as your front desk." },
  { q:"What if a caller wants a human?", a:"The AI collects their details and flags the request for a callback." },
  { q:"Does it quote job prices?", a:"It uses approved service details. The default process is to arrange an estimate, not guess a price." },
  { q:"What does it cost?", a:"Starter is $297/month, Pro is $597/month. One-time setup is quoted between $0 and $497 according to configuration. Usage, integration and contract details are reviewed before purchase." },
  { q:"How long does setup take?", a:"We confirm a setup timeline after reviewing your requirements." },
  { q:"Is there a long contract?", a:"The contract term and cancellation conditions are explained before you sign." },
  { q:"Where are you based?", a:"Kenosha, Wisconsin. We focus on service businesses in southeast Wisconsin." },
  { q:"Who owns the call data?", a:"Access, retention, export and ownership are covered in the service agreement." },
];
