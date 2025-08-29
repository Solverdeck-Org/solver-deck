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
        className="relative flex flex-col gap-4 items-center justify-center pt-10 px-4 z-10"
      >
        <div className="flex items-center gap-2 px-2 h-8 bg-neutral-950/20 ring ring-white/20 rounded-sm">
          <Image src="/sd.png" alt="Solverdeck" width={100} height={30} /> -
          software and AI solutions
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-outfit font-medium text-center text-white">
          Transforming Businesses With <br className="block md:hidden" />{" "}
          Tailored <br className="hidden md:block" /> And Simple{" "}
          <br className="block md:hidden" />
          Software Solutions
        </h1>
        <p className="text-white/90 text-lg text-center">
          Experience the future of business <br /> with intelligent, accessible
          AI solutions.
        </p>
        <div className="flex flex-col md:flex-row mt-10 items-center gap-2">
          <Link href="#services">
            <Button className="bg-[#1800AD] h-12 text-lg items-center hover:bg-white hover:text-[#1800AD]">
              Our Services <ArrowUpRight />
            </Button>
          </Link>
          <Link href="">
            <Button className="bg-transparent hover:bg-transparent border border-white/50 h-12">
              Get in Touch
            </Button>
          </Link>
        </div>
      </motion.div>
    </DotBackground>
  );
};

export default HeroSection;
