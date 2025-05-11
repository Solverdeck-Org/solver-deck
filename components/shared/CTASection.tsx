"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="bg-white py-16 md:py-24 relative overflow-hidden" ref={ref}>
      {/* Background with gradient and mesh */}
      <div className="absolute inset-0 bg-white z-0">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,rgba(25,60,184,0.4)_0%,transparent_40%)]"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_60%,rgba(25,60,184,0.4)_0%,transparent_40%)]"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_40%_80%,rgba(25,60,184,0.4)_0%,transparent_40%)]"></div>

        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(to_right,#19191910_1px,transparent_1px),linear-gradient(to_bottom,#19191910_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/40 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-[#193cb8]/20 shadow-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="mb-6 text-[#193cb8]">
                Ready to Transform Your
                Business?
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-black font-normal mb-8"
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
                    className="w-50 bg-[#193cb8] hover:bg-[#193cb8]/90 text-white"
                  >
                    Schedule a Consultation
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-50 bg-white ring-2 ring-[#193cb8] text-[#193cb8] hover:text-[#193cb8]/90 font-normal"
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
