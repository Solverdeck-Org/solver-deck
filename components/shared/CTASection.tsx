"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="bg-[#050e28] py-16 md:py-24 relative overflow-hidden" ref={ref}>
      {/* Background with gradient and mesh */}
      <div className="absolute inset-0 bg-[#050e28] z-0">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,rgba(91,143,255,0.4)_0%,transparent_40%)]"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_60%,rgba(37,99,235,0.4)_0%,transparent_40%)]"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_40%_80%,rgba(59,130,246,0.4)_0%,transparent_40%)]"></div>

        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#050e28]/40 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-border/50 shadow-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="mb-6">
                Ready to Transform Your
                Business?
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-primary font-normal mb-8"
              >
                Let's discuss how our technology solutions can help your
                business grow, increase efficiency, and stay ahead of the
                competition.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="w-50 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Schedule a Consultation
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-50 border-primary text-primary font-normal hover:bg-primary/10"
                  >
                    Explore Our Services
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
