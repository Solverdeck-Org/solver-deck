"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const CompanyStorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Our Story
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                SolverDeck was founded in 2018 by a group of technology
                experts who saw that small businesses were being left behind in
                the AI and automation revolution. While enterprise companies had
                the resources to implement cutting-edge technology, smaller
                organizations struggled to access the same advantages.
              </p>

              <p>
                Our mission became clear: to democratize access to advanced
                technology solutions by making them accessible, affordable, and
                practical for small to medium-sized businesses.
              </p>

              <p>
                Since then, we've helped over 200 businesses across various
                industries implement AI-powered solutions, automate processes,
                and leverage data to make better decisions. Our client-centered
                approach ensures that we don't just deliver technology – we
                deliver results that matter to your business.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="border-l-4 border-[#193cb8] pl-4">
                <h3 className="font-bold gradient-text">Our Mission</h3>
                <p className="text-black">
                  To empower businesses with enterprise-grade technology
                  solutions that drive growth and efficiency.
                </p>
              </div>

              <div className="border-l-4 border-[#193cb8] pl-4">
                <h3 className="font-bold gradient-text">Our Vision</h3>
                <p className="text-black">
                  A world where businesses of all sizes can harness the full
                  potential of technology to thrive in the digital economy.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/brain.jpg"
                alt="Our team at work"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/10 rounded-lg"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStorySection;
