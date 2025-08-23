import React from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionButton from "../shared/SectionButton";

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const content: FAQItem[] = [
  {
    question: "Who can benefit from Solverdeck's services?",
    answer:
      "Our solutions are tailored for small to medium-sized businesses seeking to streamline operations, leverage data insights, and implement scalable technology solutions.",
  },
  {
    question: "How does Solverdeck approach AI integration?",
    answer:
      "We implement AI solutions tailored to your business needs, from chatbots to predictive analytics.",
  },
  {
    question: "Can Solverdeck help automate my business tasks?",
    answer:
      "Yes, we streamline operations and reduce manual tasks with custom automation workflows.",
  },
  {
    question: "What kind of software development services do you provide?",
    answer:
      "We build tailored software solutions designed specifically for your business requirements.",
  },
  {
    question: "How can I get started with Solverdeck?",
    answer:
      "You can book a consultation through our website to discuss your business needs and how we can assist.",
  },
  {
    question: "What is the typical project timeline?",
    answer:
      "Project timelines vary based on complexity, but we strive to deliver efficient solutions promptly.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "Pricing is based on project scope and complexity. We offer competitive rates tailored to your specific needs.",
  },
  {
    question: "Do you offer packages or custom pricing?",
    answer:
      "We provide both standard packages and customized pricing to fit various business requirements.",
  },
];

const FAQ = () => {
  return (
    <div className="section" id="faq">
      <SectionButton>FAQs</SectionButton>
      <h2 className="section-header">We’re here to help</h2>
      <p className="section-desc">
        FAQs designed to provide the information you need.
      </p>
      <div className="not-prose mt-10 flex flex-col gap-4 md:mt-14">
        {content.map((item, index) => (
          <Accordion key={index} type="single" collapsible>
            <AccordionItem
              value={item.question}
              className="w-[300px] md:w-[600px] rounded-2xl border border-white/5 bg-white/5 px-4 transition-all"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base md:w-3/4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
