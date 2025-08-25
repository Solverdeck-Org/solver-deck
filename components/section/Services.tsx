"use client";

import React from "react";
import { motion } from "motion/react"; // ONLY using motion/react (new library)
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
        transition={{ type: "spring", damping: 24, stiffness: 180, delay: 0.05 }}
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
      <div className="flex flex-col items-center gap-8 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ type: "spring", damping: 24, stiffness: 180, delay: 0.15 }}
          >
            <ServiceCard
              imageSrc={"/software-dev.jpg"}
              title="Custom Software Development"
              description="Build tailored software solutions designed specifically for your business requirements."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ type: "spring", damping: 24, stiffness: 180, delay: 0.25 }}
          >
            <ServiceCard
              imageSrc={"/business-chatbot.jpg"}
              title="Business Chatbot"
              description="Streamline operations and reduce manual tasks with custom automation workflows."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ type: "spring", damping: 24, stiffness: 180, delay: 0.35 }}
          >
            <ServiceCard
              imageSrc={"/ai-int.jpg"}
              title="AI Integration"
              description="Implement AI solutions tailored to your business needs."
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ type: "spring", damping: 24, stiffness: 180, delay: 0.45 }}
        >
          <ServiceCard
            imageSrc={"/business-analysis.jpg"}
            title="Business Analysis & Automation"
            description="Gain valuable insights from your business data to make informed strategic decisions."
            className="w-70 md:w-90"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
