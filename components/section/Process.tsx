import React from "react";
import SectionButton from "../shared/SectionButton";
import GlowingStarsCard from "../shared/GlowingStarsCard";

const Process = () => {
  return (
    <div className="section" id="process">
      <SectionButton>Process</SectionButton>
      <h2 className="section-header">Your path to excellence</h2>
      <p className="section-desc">
        A structured and simple approach to ensure successful implementation and
        measurable results.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <GlowingStarsCard
          title="Discovery & Assessment"
          description="We begin by understanding your business, challenges, and goals through in-depth consultation and analysis of your current systems."
          number="1"
        />
        <GlowingStarsCard
          title="Strategy Development"
          description="Based on our findings, we create a tailored technology strategy that aligns with your business objectives and budget."
          number="2"
        />
        <GlowingStarsCard
          title="Implementation"
          description="We execute the plan, develop and implement solutions with regular updates and minimal disruption to your operations."
          number="3"
        />
        <GlowingStarsCard
          title="Evaluation & Optimisation"
          description="We measure results against defined KPIs and make necessary adjustments to ensure optimal performance."
          number="4"
        />
      </div>
      <GlowingStarsCard
        title="Ongoing Support"
        description="We provide continuous support, maintenance, and updates to keep your technology running smoothly and adapting to new challenges."
        number="5"
        className="mt-10 grid"
      />
    </div>
  );
};

export default Process;
