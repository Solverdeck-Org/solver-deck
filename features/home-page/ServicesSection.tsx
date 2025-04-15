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
    <section className="py-16 md:py-24 bg-[#050e28]" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 heading-gradient">
            Our Services
          </h2>
          <p className="text-xl text-shadow-md max-w-3xl mx-auto">
            We provide comprehensive technology solutions to help small
            businesses thrive in the digital age.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="relative group overflow-hidden rounded-xl h-[400px]">
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
                <div className="absolute inset-0 bg-black/40 z-10" />

                {/* Content on top */}
                <div className="relative z-20 flex flex-col h-full p-6 text-white">
                  <div className="flex flex-col items-start gap-2">
                    <service.icon className="h-8 w-8 text-primary" />
                    <h3 className="text-base md:text-sm text-shadow-md font-semibold uppercase">
                      {service.title}
                    </h3>
                    <p className="text-white max-md:text-xl text-shadow-lg font-semibold">{service.short}</p>
                  </div>

                  <div
                    className={`mt-4 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100 transform translate-x-full opacity-0`}
                  >
                    <p className="text-[14px] text-white max-md:text-lg text-shadow-md font-normal">{service.description}</p>
                    <Link href={service.link} className="mt-4 block">
                      <Button
                        variant="outline"
                        className="rounded-tl-2xl rounded-br-2xl px-4 py-2 border border-primary text-primary transition duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
                      >
                        Learn More
                      </Button>
                    </Link>
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
            <Button size="lg" className="bg-primary rounded-full hover:bg-primary/90">
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection;