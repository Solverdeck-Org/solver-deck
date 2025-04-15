"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const CaseStudySection = () => {
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
          <h2 className="mb-4 heading-gradient">
            Featured Case Study
          </h2>
          <p className="text-xl text-shadow-md max-w-3xl mx-auto">
            See how we've helped our clients achieve remarkable results.
          </p>
        </motion.div>

        <Card className="overflow-hidden p-0 bg-[#050e28] border-0 shadow-lg backdrop-blur-sm">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative h-64 lg:h-auto"
              >
                <Image
                  src="/business-deal.jpg"
                  alt="Case study featured image"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent mix-blend-multiply" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                }
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-8 lg:p-12"
              >
                <div className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
                  Retail Industry
                </div>
                <h3 className="mb-4 heading-text">
                  How RetailPlus Increased Sales by 45% with AI-Powered
                  Inventory Management
                </h3>
                <p className="mb-6">
                  RetailPlus, a growing chain of specialty stores, was
                  struggling with inventory management and customer engagement.
                  We implemented a custom AI solution that optimized their
                  inventory and personalized the shopping experience.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-background/50 p-4 rounded-lg">
                    <p className="text-3xl">45%</p>
                    <p>Increase in Sales</p>
                  </div>
                  <div className="bg-background/50 p-4 rounded-lg">
                    <p className="text-3xl">60%</p>
                    <p>
                      Reduction in Stockouts
                    </p>
                  </div>
                </div>

                <Link href="/case-studies/retail-plus">
                  <Button className="group bg-primary hover:bg-primary/90">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </CardContent>
        </Card>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/case-studies">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/5"
            >
              View All Case Studies
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudySection;
