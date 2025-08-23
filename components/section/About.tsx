import React from "react";
import SectionButton from "../shared/SectionButton";
import { MdOutlineWorkHistory, MdAutoGraph, MdOutlineWorkspacePremium } from "react-icons/md";
import { PiLightbulbFill, PiRocketLaunchFill } from "react-icons/pi";
import { FaRegHandshake } from "react-icons/fa6";
import { BiSolidConversation } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";
import StatCard from "../StatCard";
import InfoCard from "../InfoCard";
import FeatureCard from "../FeatureCard";

const About = () => {
  return (
    <div className="section" id="about">
      <SectionButton>About</SectionButton>
      <h2 className="section-header">Helping Businesses Grow</h2>
      <p className="section-desc mb-10">
        Solverdeck helps businesses streamline operations and grow faster with
        smart software integration.
      </p>

      <SectionButton>Who We Are</SectionButton>
      <h2 className="section-header !font-normal">Who We Are</h2>
      <p className="section-desc max-sm:!max-w-110 sm:max-w-110 md:max-w-full">
        Solver Deck is a trusted IT consultancy dedicated to delivering smart,
        scalable, and future-ready solutions.
        <br /> We help organisations harness technology to optimise workflows,
        improve efficiency, and achieve <br /> sustainable growth through
        innovation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
        <StatCard
          icon={<MdOutlineWorkHistory />}
          title="25+"
          description="Active Projects"
        />
        <StatCard
          icon={<BiSolidConversation />}
          title="30+"
          description="Successful Conversions"
        />
        <StatCard
          icon={<HiUsers />}
          title="40+"
          description="Satisfied Clients"
        />
      </div>

      <SectionButton>Our Values</SectionButton>
      <h2 className="section-header !font-normal">
        The Values Behind Solver Deck
      </h2>
      <p className="section-desc">
        Our values shape everything we do at Solver Deck. From innovation to
        integrity, <br /> we’re committed to building AI solutions that empower
        businesses and drive real impact.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
        <InfoCard
          icon={<PiLightbulbFill />}
          title="Driving Innovation Forward"
          description="We embrace cutting-edge AI to create smarter, more efficient automation solutions."
        />
        <InfoCard
          icon={<FaRegHandshake />}
          title="Committed to Integrity & Trust"
          description="Trust and transparency are at the core of everything we do for our clients."
        />
        <InfoCard
          icon={<PiRocketLaunchFill />}
          title="Empowering Business Growth"
          description="We help businesses scale faster with AI-driven efficiency, reducing manual tasks and unlocking new opportunities."
        />
        <InfoCard
          icon={<HiUsers />}
          title="Putting Customers First"
          description="Your success is our priority—we build solutions that truly make an impact."
        />
      </div>

      <SectionButton>Why us</SectionButton>
      <h2 className="section-header !font-normal !text-center">
        What makes us stand <br /> out in the industry
      </h2>
      <p className="section-desc">
        Discover how our innovative strategies, data-driven approach, and <br />
        commitment to results set us apart from the competition
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
        <StatCard icon={<PiRocketLaunchFill />} title="Streamline Operations" description="Automate workflows and optimize your business processes." />
        <StatCard icon={<PiLightbulbFill />} title="Data-Driven Insights" description="Transform raw data into actionable business intelligence." />
        <StatCard icon={<MdAutoGraph />} title="Scalable Solutions" description="Future-proof systems that grow with your business." />
        <StatCard icon={<MdOutlineWorkspacePremium />} title="Enterprise Value" description="Premium solutions at competitive price points." />
      </div>
      <FeatureCard />
    </div>
  );
};

export default About;
