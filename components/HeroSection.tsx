"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { DotBackground } from "../features/home-page/DotBackground";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <DotBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 z-10"
      >
        <div className="flex items-center gap-2 px-2 h-8 bg-neutral-950/20 ring ring-white/20 rounded-sm">
          <Image src="/sd.png" alt="Solverdeck" width={120} height={36} />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-outfit font-medium text-center text-white">
          Transforming Businesses Through <br /> Intelligent Technology
        </h1>
        <p className="text-white/90 text-base text-center">
          We are a leading provider of AI-powered solutions for businesses of
          all sizes.
        </p>
        <Link href="#services">
          <Button className="mt-10 bg-[#350136] h-12 text-lg items-center hover:bg-white hover:text-[#350136]">
            Our Services <ArrowUpRight />
          </Button>
        </Link>
      </motion.div>
    </DotBackground>
  );
};

export default HeroSection;
