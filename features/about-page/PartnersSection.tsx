"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { partners } from "@/data/partners";
import { certifications } from "@/data/certifications";

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
            Partners & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We work with industry-leading technology partners and maintain
            professional certifications.
          </p>
        </motion.div>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center gradient-text">
              Our Partners
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
            >
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-card/50 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center"
                >
                  <img
                    src={partner.image || "/placeholder.svg"}
                    alt={partner.name}
                    className="max-h-12 max-w-full"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-center gradient-text">
              Certifications
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-wrap justify-center gap-8"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center"
                >
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.name}
                    className="h-16 w-16"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
