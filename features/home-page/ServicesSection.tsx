"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-black" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-blue-600">Our Services</h2>
          <p className="text-xl font-normal max-w-3xl mx-auto text-black">
            Helping businesses succeed through smart, scalable technology
            solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="relative group overflow-hidden rounded-xl max-w-80 h-[400px] bg-white">
                {/* Background Image */}
                <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-150 group-hover:origin-top-left group-hover:blur-md">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 z-10" />

                {/* Content on top */}
                <div className="relative z-20 flex flex-col h-full p-6 text-black">
                  <div className="flex flex-col items-start gap-2">
                    <service.icon className="h-8 w-8 text-white" />
                    <h3 className="text-base md:text-sm font-semibold uppercase text-white">
                      {service.title}
                    </h3>
                    <p className="max-md:text-xl font-semibold text-white">
                      {service.short}
                    </p>
                  </div>

                  <div
                    className={`mt-4 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100 transform translate-x-full opacity-0`}
                  >
                    <p className="text-[14px] max-md:text-lg font-normal text-white">
                      {service.description}
                    </p>
                    {/* <Link href={service.link} className="mt-4 block">
                      <Button
                        variant="outline"
                        className="rounded-tl-2xl rounded-br-2xl px-4 py-2 border border-blue-600 text-white transition duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-1"
                      >
                        Learn More
                      </Button>
                    </Link> */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link href="/services">
            <Button
              size="lg"
              className="bg-blue-600 text-white rounded-full hover:bg-blue-700"
            >
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
