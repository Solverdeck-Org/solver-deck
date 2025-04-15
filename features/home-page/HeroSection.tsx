"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background gradient */}
      <div className="background-gradient" />

      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-accent rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 text-shadow-lg"
            >
              Transforming Small Businesses Through{" "}
              <span className="gradient-text">Intelligent Technology</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              AI Integration, Automation, and Custom Software Solutions for
              Growth-Focused Businesses
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                >
                  Explore Our Services
                </Button>
              </Link>

              <Link href="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary rounded-full hover:bg-primary/10"
                >
                  Book a Free Consultation
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-[1rem] overflow-hidden shadow-2xl">
                <Image
                  src="/brain.jpg"
                  alt="AI technology visualization"
                  width={800}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-overlay" />
              </div>

              {/* Floating elements */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.8,
                  y: {
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    duration: 2,
                  },
                }}
                className="absolute -bottom-6 -left-6 bg-[#050e28] rounded-[8px] shadow-lg p-4 w-40"
              >
                <div className="flex items-center">
                  <div className="small-dot bg-green-500" />
                  <p className="text-sm">40% Time Saved</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 1,
                  y: {
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    duration: 2.5,
                  },
                }}
                className="absolute -top-6 -right-6 bg-[#050e28] rounded-[8px] shadow-lg p-4 w-40"
              >
                <div className="flex items-center">
                  <div className="small-dot bg-blue-500" />
                  <p className="text-sm">30% Cost Reduction</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
