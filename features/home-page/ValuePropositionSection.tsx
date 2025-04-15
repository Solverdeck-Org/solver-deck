"use client";

import { motion } from "framer-motion";
import { features } from "@/data/features";

const ValuePropositionSection = () => {
  return (
    <section className="py-20 bg-[#050e28]">
      <h2 className="text-center text-3xl font-bold heading-gradient mb-12">
        Why Choose Us?
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="value-card"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="bg-purple-50 p-4 rounded-full mb-5 w-fit">
              <feature.icon size={48} className="text-blue-800" />
            </div>
            <h3 className="text-lg text-white text-shadow-lg font-semibold mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-white text-shadow-md font-normal leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ValuePropositionSection;
