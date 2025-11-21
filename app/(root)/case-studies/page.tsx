"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                type: "spring",
                damping: 24,
                stiffness: 180,
                delay: 0.1 + index * 0.1,
              }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
            >
              {/* Image Container */}
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.name}
                  width={800}
                  height={450}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content Container */}
              <div className="p-6">
                <Link
                  href={project.link}
                  className="inline-block text-xl font-bold text-white hover:text-blue-400 transition-colors mb-2"
                >
                  {project.name}
                </Link>
                <p className="text-white/70 text-sm line-clamp-3 mb-4">
                  {project.descp}
                </p>
                <Link
                  href={project.link}
                  className="text-sm font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1"
                >
                  View Project <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
