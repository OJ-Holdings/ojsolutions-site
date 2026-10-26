export interface Trade {
  slug: string;
  name: string;
  title: string;
  situation: string;
  example: string;
  details: string[];
}

export const trades: Trade[] = [
  {
    slug: "ai-receptionist-for-pressure-washing",
    name: "Pressure washing",
    title: "You're washing a driveway. The next estimate call still matters.",
    situation: "House-wash and concrete-cleaning inquiries come in while you're working with a pressure washer. The AI records surface, approximate area and access questions before an estimate.",
    example: "I have algae on the siding and a large driveway. Could someone estimate both?",
    details: ["Surface to clean: siding, concrete, deck or windows", "Approximate size or square footage, if the caller knows it", "Property location, access notes and preferred estimate time"],
  },
  {
    slug: "ai-receptionist-for-hvac",
    name: "HVAC",
    title: "On a service call? Your next inquiry still gets answered.",
    situation: "No-cool and no-heat calls need prompt human review, while routine service and installation questions still need to be captured when technicians are occupied.",
    example: "Our AC stopped cooling this afternoon. Can your team call me to discuss service?",
    details: ["No cooling, no heat, scheduled maintenance or installation inquiry", "Is anyone in immediate danger? Urgent safety concerns require local emergency services, not an AI diagnosis", "Service location, callback details and time sensitivity for the human team"],
  },
  {
    slug: "ai-receptionist-for-plumbing",
    name: "Plumbing",
    title: "Under a sink? Don't make every caller leave a voicemail.",
    situation: "Leak calls can sound urgent, while routine fixture jobs can be planned. The AI captures the issue and flags urgency for the plumbing team's callback.",
    example: "Water is leaking below our kitchen sink. Can someone call me about an appointment?",
    details: ["Leak, clog, fixture replacement or other service requested", "Active water flow, potential damage and urgency flag for staff—without attempting repair instructions", "Location, reachable callback number and preferred visit or callback window"],
  },
  {
    slug: "ai-receptionist-for-landscaping",
    name: "Landscaping",
    title: "Out on the property. Still reachable to the next customer.",
    situation: "Spring cleanup, recurring mowing and hardscape projects each need different scheduling details. The AI collects them while crews are out on properties.",
    example: "Are you booking fall leaf cleanup and regular mowing in my neighborhood?",
    details: ["Seasonal cleanup, mowing, mulching or hardscape service", "Approximate property area, frequency and any seasonal deadline", "Neighborhood, access notes and preferred estimate date"],
  },
  {
    slug: "ai-receptionist-for-roofing",
    name: "Roofing",
    title: "On the roof. Your front desk stays on the ground.",
    situation: "Following a storm, inspection and active-leak calls may need quick review, while replacement projects need careful scoping. The AI gathers context without assessing roof safety.",
    example: "After yesterday's storm, we noticed missing shingles and a ceiling stain. Can someone call us?",
    details: ["Storm damage, active leak, routine repair or replacement inquiry", "Whether water is entering the building, flagged for prompt staff attention; no promise of emergency dispatch", "Property location, inspection preferences and safe callback details"],
  },
  {
    slug: "ai-receptionist-for-auto-detailing",
    name: "Auto detailing",
    title: "Hands on the vehicle. Someone still handles the call.",
    situation: "Detailing customers usually want to know which package fits their vehicle and when a slot opens. The AI collects vehicle and service details without inventing prices.",
    example: "Do you have an interior detailing package for a three-row SUV next week?",
    details: ["Vehicle size and type: sedan, SUV, truck or van", "Interior, exterior, paint correction or other requested package", "Condition notes and preferred drop-off date for staff follow-up"],
  },
];

