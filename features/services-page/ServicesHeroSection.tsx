"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const ServicesHeroSection = () => {
  return (
    <section className="flex items-center h-screen pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 gradient-text"
          >
            Our Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl font-normal mb-8"
          >
            We provide comprehensive technology solutions tailored to the unique needs of small businesses. Our services
            are designed to help you leverage the latest technologies without enterprise-level costs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Schedule a Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ServicesHeroSection