"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { technologies } from "@/data/technologies";

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
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center justify-center"
            >
              <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24 flex items-center justify-center">
                <img
                  src={tech.image || "/placeholder.svg"}
                  alt={tech.name}
                  className="max-h-12 max-w-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
