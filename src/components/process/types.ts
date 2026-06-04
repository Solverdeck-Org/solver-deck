export interface Phase {
  id: string;
  num: string;
  title: string;
  content: string;
}

export const phases: Phase[] = [
  {
    id: "phase-01",
    num: "01",
    title: "DISCOVERY",
    content:
      "To understand your business, we ask the right questions about your customers, your current setup, and what's costing you time or money. Whether you need a new website, an AI automation system, or both, this is where we figure out exactly what will make the biggest difference for your business.",
  },
  {
    id: "phase-02",
    num: "02",
    title: "STRATEGY",
    content:
      "We take everything we've learned and put together a clear plan. Just a practical roadmap that shows you what we'll build, what it will cost, and what results you can expect. Most of our clients see a return within the first 30 days.",
  },
  {
    id: "phase-03",
    num: "03",
    title: "BUILD",
    content:
      "We build your website or AI solution using modern technology that performs. Every website we deliver is mobile-friendly and optimised for Google from day one. Every AI agent is trained on your specific business so it answers like someone who actually works for you.",
  },
  {
    id: "phase-04",
    num: "04",
    title: "TESTING",
    content:
      "Before anything goes live, we test it properly. Your website gets checked across every device and browser. Your AI agent gets tested with real customer questions until every answer is accurate. We don't hand over something that isn't ready.",
  },
  {
    id: "phase-05",
    num: "05",
    title: "SUPPORT",
    content:
      "We don't disappear after launch. Every website we build includes ongoing maintenance and hosting. Every AI system we deploy gets monitored and updated as your business changes. You get a local team you can actually reach when something needs attention.",
  },
];
