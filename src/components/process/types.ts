export interface Phase {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  content: string;
  highlight: string;
  visualType: "audit" | "strategy" | "implementation" | "testing" | "support";
}

export const phases: Phase[] = [
  {
    id: "phase-01",
    num: "01",
    title: "DISCOVERY",
    subtitle: "Discovery & Assessment",
    content:
      "We start with a deep dive into your business. Through workshops, stakeholder interviews, and technical audits, we map your current systems, uncover hidden challenges, and define clear success metrics aligned with your growth goals.",
    highlight: "System & Infrastructure Audit",
    visualType: "audit",
  },
  {
    id: "phase-02",
    num: "02",
    title: "STRATEGY",
    subtitle: "Strategy & Roadmap",
    content:
      "Using insights from discovery, we craft a tailored technology strategy and phased roadmap. We prioritize quick wins, scalability, and ROI while ensuring every recommendation fits your budget, timeline, and long-term vision.",
    highlight: "Tailored Scalability Roadmap",
    visualType: "strategy",
  },
  {
    id: "phase-03",
    num: "03",
    title: "IMPLEMENTATION",
    subtitle: "Implementation & Execution",
    content:
      "We execute the plan with precision. Our agile development process includes regular progress updates, transparent communication, and rigorous testing at every stage to ensure smooth delivery with minimal operational disruption.",
    highlight: "Agile Sprints & Clean Code",
    visualType: "implementation",
  },
  {
    id: "phase-04",
    num: "04",
    title: "TESTING",
    subtitle: "Testing & Optimization",
    content:
      "We don’t just launch — we validate. Through comprehensive testing (functional, performance, security, and user acceptance), we identify improvements and optimize every solution before full rollout. This phase ensures maximum reliability and performance from day one.",
    highlight: "Full-Scale Security & Load Tests",
    visualType: "testing",
  },
  {
    id: "phase-05",
    num: "05",
    title: "SUPPORT",
    subtitle: "Ongoing Support & Evolution",
    content:
      "Technology doesn’t stand still, and neither do we. We provide proactive maintenance, continuous monitoring, regular optimization, and strategic guidance so your systems stay secure, efficient, and aligned with evolving business needs.",
    highlight: "24/7 SLA & Proactive Support",
    visualType: "support",
  },
];
