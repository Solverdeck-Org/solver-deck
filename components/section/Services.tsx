"use client";

import React from "react";
import SectionButton from "../shared/SectionButton";
import ServiceCard from "../ServiceCard";

const Services = () => {
  return (
    <div className="section" id="services">
      <SectionButton>Services</SectionButton>
      <h2 className="section-header">Innovative services for growth</h2>
      <p className="section-desc">
        We offer a range of services to help you grow your business.
      </p>
      <div className="flex flex-col items-center gap-8 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            imageSrc={"/sd.png"}
            title="Custom Software Development"
            description="Build tailored software solutions designed specifically for your business requirements."
          />
          <ServiceCard
            imageSrc={"/sd.png"}
            title="Business Chatbot"
            description="Streamline operations and reduce manual tasks with custom automation workflows."
          />
          <ServiceCard
            imageSrc={"/sd.png"}
            title="AI Integration"
            description="Implement AI solutions tailored to your business needs."
          />
        </div>

        <ServiceCard
          imageSrc={"/sd.png"}
          title="Business Analysis & Automation"
          description="Gain valuable insights from your business data to make informed strategic decisions."
          className="w-70 md:w-90"
        />
      </div>
    </div>
  );
};

export default Services;
