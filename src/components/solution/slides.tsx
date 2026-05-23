import { AiAutomationCards } from "@/components/AiAutomationCards";
import { ChatbotCards } from "@/components/ChatbotCards";
import { SoftwareDevelopmentCards } from "@/components/SoftwareDevelopmentCards";

export interface Slide {
  id: "software" | "ai" | "chatbots";
  tabTitle: string;
  heading: React.ReactNode;
  subheading: string;
  description: React.ReactNode;
  highlights: string[];
  Cards: React.ComponentType;
}

export const slides: Slide[] = [
  {
    id: "software",
    tabTitle: "Software Development",
    heading: <>Engineer software <br className="hidden lg:block" /> that scales your business</>,
    subheading: "Where robust engineering and intuitive design converge",
    description: (
      <>
        From high-performance web, native mobile, and robust desktop applications to complex SaaS
        platforms and conversion-optimized <span className="whitespace-nowrap">e-commerce</span>{" "}
        sites. We build scalable, secure, and beautiful software tailored to your specific
        operational needs.
      </>
    ),
    highlights: ["Web, Mobile & Desktop Applications", "Custom SaaS Architecture", "E-Commerce Engineering"],
    Cards: SoftwareDevelopmentCards,
  },
  {
    id: "ai",
    tabTitle: "AI & Automation",
    heading: <>Accelerate growth with <br className="hidden lg:block" /> autonomous AI intelligence</>,
    subheading: "Implement AI solutions tailored to your business needs.",
    description: (
      <>
        Unlock unprecedented productivity. We replace manual complexity with custom machine learning
        models, smart reasoning agents, and automated data pipelines that execute enterprise
        workflows 24/7 without friction.
      </>
    ),
    highlights: ["AI Integration & LLMs", "Workflow Automation", "Business Process Automation"],
    Cards: AiAutomationCards,
  },
  {
    id: "chatbots",
    tabTitle: "Chatbots",
    heading: <>Engage and resolve <br className="hidden lg:block" /> instantly with conversational AI</>,
    subheading: "Streamline operations and reduce manual tasks with custom automation workflows.",
    description: (
      <>
        Delight customers and supercharge your team&apos;s throughput. Our custom conversational
        assistants integrate with your CRMs and knowledge bases to automate support, qualify leads,
        and assist teams in real-time.
      </>
    ),
    highlights: ["Customer Support Chatbots", "Internal Team Assistants", "Social Media Lead Bots"],
    Cards: ChatbotCards,
  },
];
