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
        <div className="grid grid-cols-1 gap-6 pt-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
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
              imageSrc={"/software-dev.jpg"}
              title="Software Development"
              description="Build tailored software solutions designed specifically for your business requirements."
              features={[
                "Web Development",
                "Frontend Engineering",
                "Backend Systems",
                "SaaS Platforms",
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
              imageSrc={"/business-chatbot.jpg"}
              title="Business Chatbot"
              description="Streamline operations and reduce manual tasks with custom automation workflows."
              features={[
                "Customer Support AI",
                "Lead Generation",
                "24/7 Availability",
                "Custom Workflows",
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
            className="h-full"
          >
            <ServiceCard
              imageSrc={"/ai-int.jpg"}
              title="AI Integration"
              description="Implement AI solutions tailored to your business needs."
              features={[
                "Predictive Analytics",
                "NLP Solutions",
                "Process Optimization",
                "Data Insights",
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
              delay: 0.45,
            }}
            className="h-full"
          >
            <ServiceCard
              imageSrc={"/business-analysis.jpg"}
              title="Business Automation"
              description="Gain valuable insights from your business data to make informed strategic decisions."
              features={[
                "Workflow Streamlining",
                "Task Scheduling",
                "CRM Integration",
                "Operational Efficiency",
              ]}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
