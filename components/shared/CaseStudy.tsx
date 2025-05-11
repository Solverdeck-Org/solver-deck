import React, { useRef } from "react";
import { Card, CardContent } from "../ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const CaseStudy = ({isInView}: {isInView: any}) => {
  const ref = useRef(null);

  return (
    <Card ref={ref} className="overflow-hidden p-0 bg-white border border-gray-200 shadow-lg">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
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
            <div className="absolute inset-0 bg-gradient-to-r from-[#193cb8]/40 to-transparent mix-blend-multiply" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-8 lg:p-12"
          >
            <div className="inline-block px-3 py-1 bg-[#193cb8]/20 text-[#193cb8] rounded-full text-sm font-medium mb-4">
              Retail Industry
            </div>
            <h3 className="mb-4 text-[#193cb8] text-2xl font-bold">
              How RetailPlus Increased Sales by 45% with AI-Powered Inventory
              Management
            </h3>
            <p className="font-normal mb-6 text-black">
              RetailPlus, a growing chain of specialty stores, was struggling
              with inventory management and customer engagement. We implemented
              a custom AI solution that optimized their inventory and
              personalized the shopping experience.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-3xl text-[#193cb8]">45%</p>
                <p className="font-normal text-black">Increase in Sales</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-3xl text-[#193cb8]">60%</p>
                <p className="font-normal text-black">Reduction in Stockouts</p>
              </div>
            </div>

            <Link href="/case-studies/retail-plus">
              <Button className="group bg-[#193cb8] hover:bg-[#193cb8]/90 text-white">
                Read Full Case Study
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CaseStudy;
