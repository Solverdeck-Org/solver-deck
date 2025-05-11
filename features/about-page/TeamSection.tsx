"use client";

import { useRef } from "react";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { motion, useInView } from "framer-motion";
import { people } from "@/data/people";


export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-white py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Meet Our Team
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our diverse team of experts is passionate about helping businesses
            succeed through technology.
          </p>
        </motion.div>

        <div className="flex flex-row bg-white items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={people} />
        </div>
      </div>
    </section>
  );
}
