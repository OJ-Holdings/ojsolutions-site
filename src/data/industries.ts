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
    situation: "A new caller asks about house washing, concrete cleaning, or a scheduling window while you're operating equipment.",
    example: "Hi, do you clean vinyl siding? Can someone look at my house next week?",
    details: ["Type of surface or service requested", "Property address and preferred timeframe", "Best contact details for an on-site estimate"],
  },
  {
    slug: "ai-receptionist-for-hvac",
    name: "HVAC",
    title: "On a service call? Your next inquiry still gets answered.",
    situation: "When technicians are on installs or service visits, callers may need to describe an issue or ask for a future assessment.",
    example: "Can someone take a look at my air conditioner? It's not cooling.",
    details: ["Whether the call concerns service or a new installation", "Service address and preferred callback details", "Requested appointment window or need for staff follow-up"],
  },
  {
    slug: "ai-receptionist-for-plumbing",
    name: "Plumbing",
    title: "Under a sink? Don't make every caller leave a voicemail.",
    situation: "A plumbing shop needs to capture details without interrupting a technician in the middle of a job.",
    example: "I have a leak under my kitchen sink. Can someone call me?",
    details: ["What kind of issue the caller describes", "Property and contact details", "Callback request, urgency notes and preferred time"],
  },
  {
    slug: "ai-receptionist-for-landscaping",
    name: "Landscaping",
    title: "Out on the property. Still reachable to the next customer.",
    situation: "Landscaping crews are often away from the office when someone calls about mowing, cleanup, hardscaping, or an estimate.",
    example: "Do you give estimates for spring yard cleanups?",
    details: ["Requested landscape or maintenance work", "Property location and available timeframes", "Caller contact details for an estimate"],
  },
  {
    slug: "ai-receptionist-for-roofing",
    name: "Roofing",
    title: "On the roof. Your front desk stays on the ground.",
    situation: "A roofing company may receive repair and replacement inquiries while the owner is on an inspection or project.",
    example: "Could someone assess a few missing shingles on my roof?",
    details: ["Whether the inquiry is about repair or replacement", "Address and project description", "Preferred inspection time and contact details"],
  },
  {
    slug: "ai-receptionist-for-auto-detailing",
    name: "Auto detailing",
    title: "Hands on the vehicle. Someone still handles the call.",
    situation: "Detailing shops handle customer inquiries while working on a vehicle, often with no one available at the counter.",
    example: "Do you offer interior detailing for SUVs? What appointment options do you have?",
    details: ["Vehicle type and service of interest", "Preferred day or appointment timeframe", "Customer contact information for follow-up"],
  },
];

