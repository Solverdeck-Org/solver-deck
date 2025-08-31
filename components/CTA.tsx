import React from "react";
import SectionButton from "./shared/SectionButton";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const CTA = () => {
  return (
    <div className="section">
      <SectionButton>
        <Image src="/sd.png" alt="Solverdeck" width={100} height={30} />
      </SectionButton>
      <h2 className="section-header !text-center">
        Let’s talk about <br /> your next big move
      </h2>
      <p className="section-desc">
        And how our tailored solutions can <br /> improve your operations.
      </p>
      <Link href="">
        <Button className="bg-[#1800AD] mt-10 h-10 text-base items-center hover:bg-white hover:text-[#1800AD]">
          Shedule a quick call <ArrowUpRight />
        </Button>
      </Link>
      <p className="text-white/90 text-lg text-center mt-2">It's Free</p>
    </div>
  );
};

export default CTA;
