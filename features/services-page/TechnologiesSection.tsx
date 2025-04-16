"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { technologies } from "@/data/technologies";
import { OrbitingCirclesDemo } from "@/components/OrbitingCirclesDemo";

const TechnologiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Technologies We Work With
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We leverage the latest technologies and platforms to deliver
            cutting-edge solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex"
        >
          <OrbitingCirclesDemo />
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
