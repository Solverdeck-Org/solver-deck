"use client";

import CaseStudy from "@/components/shared/CaseStudy";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-28 md:py-28" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 section-header">
            Case Studies
          </h2>
          <p className="section-desc max-w-3xl mx-auto">
            See how we've helped our clients achieve remarkable results.
          </p>
        </motion.div>
        <div className="flex flex-col gap-10">
          <CaseStudy isInView />
          <CaseStudy isInView />
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
