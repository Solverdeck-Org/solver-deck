"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CaseStudy from "@/components/shared/CaseStudy";

const CaseStudySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-[#193cb8] font-bold text-3xl">
            Featured Case Study
          </h2>
          <p className="text-xl font-normal max-w-3xl mx-auto text-black">
            See how we've helped our clients achieve remarkable results.
          </p>
        </motion.div>

        <CaseStudy isInView />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/case-studies">
            <Button className="group bg-[#193cb8] hover:bg-[#193cb8]/90 text-white">
              View All Case Studies
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudySection;
