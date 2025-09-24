"use client";

import CaseStudy from "@/components/shared/CaseStudy";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/projects";

const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-28 md:py-28" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 section-header">Case Studies</h2>
          <p className="section-desc max-w-3xl mx-auto">
            Explore selected projects crafted with clean interfaces, smooth 
            transitions, and performance-driven builds.
          </p>
        </motion.div>

        {/* Render projects as case studies */}
        <div className="flex flex-col gap-10">
          {projects.map((project) => (
            <CaseStudy
              key={project.name}
              project={project}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
