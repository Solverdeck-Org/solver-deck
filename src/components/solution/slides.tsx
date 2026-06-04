export interface Slide {
  id: "software" | "ai" | "chatbots";
  tabTitle: string;
  heading: React.ReactNode;
  subheading: string;
  description: React.ReactNode;
  services: { title: string; description: string }[];
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
        platforms and conversion-optimised <span className="whitespace-nowrap">e-commerce</span>{" "}
        sites. We build scalable, secure, and beautiful software tailored to your specific
        operational needs.
      </>
    ),
    services: [
      { title: "Web", description: "Custom websites that look great and load fast." },
      { title: "Mobile", description: "Apps for iOS and Android that your customers will love." },
      { title: "Desktop", description: "Powerful computer programs for your specific business needs." },
      { title: "E-Commerce", description: "Online stores designed to sell your products easily." },
      { title: "SaaS", description: "Cloud software platforms you can offer to your own clients." }
    ]
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
    services: [
      { title: "Automated Tasks", description: "Let AI handle the repetitive work for you, saving time and money." },
      { title: "Smart Insights", description: "Understand your business data better to make informed decisions." },
      { title: "Content Generation", description: "Automatically create emails, reports, or social media posts instantly." }
    ]
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
    services: [
      { title: "Customer Support", description: "Answer customer questions automatically 24/7 without staff." },
      { title: "Lead Generation", description: "Capture new customer information directly from website chats." },
      { title: "Internal Assistants", description: "Help your team find company information and documents quickly." }
    ]
  },
];
