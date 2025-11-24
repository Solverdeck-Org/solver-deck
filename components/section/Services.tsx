"use client";

import React from "react";
import { motion } from "motion/react";
import SectionButton from "../shared/SectionButton";
import ServiceCard from "../ServiceCard";

const Services = () => {
  return (
    <section className="section" id="services">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ type: "spring", damping: 24, stiffness: 180, delay: 0 }}
      >
        <SectionButton>Services</SectionButton>
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
        Innovative services for growth
      </motion.h2>

      <motion.p
        className="section-desc"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ type: "spring", damping: 24, stiffness: 180, delay: 0.1 }}
      >
        We offer a range of services to help you grow your business.
      </motion.p>

      {/* Cards */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6 pt-10 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              type: "spring",
              damping: 24,
              stiffness: 180,
              delay: 0.15,
            }}
            className="h-full"
          >
            <ServiceCard
              imageSrc={"/software-dev.png"}
              title="Software Development"
              description="Build tailored software solutions designed specifically for your business requirements."
              features={[
                "Custom Website Design",
                "System & API Integration",
                "Web & App Development",
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              type: "spring",
              damping: 24,
              stiffness: 180,
              delay: 0.25,
            }}
            className="h-full"
          >
            <ServiceCard
              imageSrc={"/chatbot.png"}
              title="Chatbots"
              description="Streamline operations and reduce manual tasks with custom automation workflows."
              features={[
                "Customer Support Chatbots",
                "Internal Team Assistants",
                "Social media Chatbots",
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              type: "spring",
              damping: 24,
              stiffness: 180,
              delay: 0.35,
            }}
            className="h-full md:col-span-2 md:w-[calc(50%-0.75rem)] md:mx-auto lg:col-span-1 lg:w-full lg:mx-0"
          >
            <ServiceCard
              imageSrc={"/ai-automation.jpg"}
              title="AI and Automation"
              description="Implement AI solutions tailored to your business needs."
              features={[
                "AI Integration",
                "Workflow Automation",
                "Business Process Automation",
              ]}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
