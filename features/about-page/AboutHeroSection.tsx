"use client";

import { motion } from "framer-motion";

const AboutHeroSection = () => {
  return (
    <section className="flex items-center h-screen pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-6 heading-gradient"
          >
            About Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl"
          >
            We're a team of technology experts dedicated to helping small
            businesses harness the power of AI and automation.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
