"use client";

import { motion } from "framer-motion";
import { features } from "@/data/features";
import StatsCard from "@/components/StatsCard";

const ValuePropositionSection = () => {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-center text-3xl font-bold text-[#193cb8] mb-12">
        Why Choose Us?
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="value-card bg-white shadow-lg rounded-lg p-6"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="bg-[#193cb8]/10 p-4 rounded-full mb-5 w-fit">
              <feature.icon size={48} className="text-[#193cb8]" />
            </div>
            <h3 className="text-lg text-[#193cb8] font-semibold mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-black font-normal leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      <StatsCard />
    </section>
  );
};

export default ValuePropositionSection;
