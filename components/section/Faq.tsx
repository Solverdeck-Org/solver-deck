"use client";

import React from "react";
import { motion } from "motion/react";
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
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ type: "spring", damping: 24, stiffness: 180, delay: 0 }}
      >
        <SectionButton>FAQs</SectionButton>
      </motion.div>

      <motion.h2
        className="section-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          type: "spring",
          damping: 24,
          stiffness: 180,
          delay: 0.05,
        }}
      >
        We’re here to help
      </motion.h2>

      <motion.p
        className="section-desc"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ type: "spring", damping: 24, stiffness: 180, delay: 0.1 }}
      >
        FAQs designed to provide the information you need.
      </motion.p>

      <motion.div
        className="not-prose mt-10 flex flex-col gap-4 md:mt-14"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          type: "spring",
          damping: 24,
          stiffness: 180,
          delay: 0.12,
        }}
      >
        {content.map((item, index) => {
          const delay = 0.15 + index * 0.07; // stagger per item
          return (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                type: "spring",
                damping: 24,
                stiffness: 180,
                delay,
              }}
            >
              <Accordion type="single" collapsible>
                <AccordionItem
                  value={item.question}
                  className="w-[300px] md:w-[500px] lg:w-[850px] rounded-2xl border border-white/5 bg-white/5 px-4 transition-all"
                >
                  <AccordionTrigger className="text-left text-xl font-normal hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base md:w-3/4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default FAQ;
