"use client";

import React from "react";
import { motion } from "motion/react"; // ONLY using motion/react
import SectionButton from "../shared/SectionButton";
import GlowingStarsCard from "../shared/GlowingStarsCard";

const Process = () => {
  return (
    <div className="section" id="process">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ type: "spring", damping: 24, stiffness: 180, delay: 0 }}
      >
        <SectionButton>Process</SectionButton>
      </motion.div>

      <motion.h2
        className="section-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ type: "spring", damping: 24, stiffness: 180, delay: 0.05 }}
      >
        Your path to excellence
      </motion.h2>

      <motion.p
        className="section-desc"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ type: "spring", damping: 24, stiffness: 180, delay: 0.1 }}
      >
        A structured and simple approach to ensure successful implementation and
        measurable results.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ type: "spring", damping: 24, stiffness: 180, delay: 0.15 }}
        >
          <GlowingStarsCard
            title="Discovery & Assessment"
            description="We begin by understanding your business, challenges, and goals through in-depth consultation and analysis of your current systems."
            number="1"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ type: "spring", damping: 24, stiffness: 180, delay: 0.25 }}
        >
          <GlowingStarsCard
            title="Strategy Development"
            description="Based on our findings, we create a tailored technology strategy that aligns with your business objectives and budget."
            number="2"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ type: "spring", damping: 24, stiffness: 180, delay: 0.35 }}
        >
          <GlowingStarsCard
            title="Implementation"
            description="We execute the plan, develop and implement solutions with regular updates and minimal disruption to your operations."
            number="3"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ type: "spring", damping: 24, stiffness: 180, delay: 0.45 }}
        >
          <GlowingStarsCard
            title="Evaluation & Optimisation"
            description="We measure results against defined KPIs and make necessary adjustments to ensure optimal performance."
            number="4"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ type: "spring", damping: 24, stiffness: 180, delay: 0.55 }}
      >
        <GlowingStarsCard
          title="Ongoing Support"
          description="We provide continuous support, maintenance, and updates to keep your technology running smoothly and adapting to new challenges."
          number="5"
          className="mt-10 grid px-10"
        />
      </motion.div>
    </div>
  );
};

export default Process;
