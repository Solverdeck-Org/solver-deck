import CTASection from "@/components/shared/CTASection";
import AboutHeroSection from "@/features/about-page/AboutHeroSection";
import ApproachSection from "@/features/about-page/ApproachSection";
import CompanyStorySection from "@/features/about-page/CompanyStorySection";
import PartnersSection from "@/features/about-page/PartnersSection";
import TeamSection from "@/features/about-page/TeamSection";
import React from "react";

const About = () => {
  return (
    <div className="overflow-x-hidden">
      <AboutHeroSection />
      <CompanyStorySection />
      <TeamSection />
      <ApproachSection />
      <PartnersSection />
      <CTASection />
    </div>
  );
};

export default About;
