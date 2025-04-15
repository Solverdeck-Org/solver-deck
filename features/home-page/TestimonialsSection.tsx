"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import MarqueeDemo from "@/components/MarqueeDemo";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-16 md:py-24 bg-[#050e28]" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 gradient-text">
            What Our Clients Say
          </h2>
          <p className="text-xl text-shadow-md font-normal max-w-3xl mx-auto">
            We've helped businesses across various industries achieve their
            technology goals.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <MarqueeDemo />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
