"use client";

import React from "react";
import { motion } from "motion/react"; // ONLY using motion/react
import SectionButton from "../shared/SectionButton";
import {
  MdOutlineWorkHistory,
  MdAutoGraph,
  MdOutlineWorkspacePremium,
} from "react-icons/md";
import { PiLightbulbFill, PiRocketLaunchFill } from "react-icons/pi";
import { FaRegHandshake } from "react-icons/fa6";
import { BiSolidConversation } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";
import StatCard from "../StatCard";
import InfoCard from "../InfoCard";
import FeatureCard from "../FeatureCard";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

const About = () => {
  return (
    <div className="section" id="about">
      {/* Header block */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ type: "spring", damping: 24, stiffness: 180, delay: 0 }}
      >
        <SectionButton>About</SectionButton>
      </motion.div>

      <motion.h2
        className="section-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          type: "spring",
          damping: 24,
          stiffness: 180,
          delay: 0.05,
        }}
      >
        Helping Businesses Grow
      </motion.h2>

      <motion.p
        className="section-desc mb-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ type: "spring", damping: 24, stiffness: 180, delay: 0.1 }}
      >
        Solverdeck helps businesses streamline operations and grow faster with
        smart software integration.
      </motion.p>

      {/* Who we are */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          type: "spring",
          damping: 24,
          stiffness: 180,
          delay: 0.12,
        }}
      >
        <SectionButton>Who We Are</SectionButton>
      </motion.div>

      <motion.h2
        className="section-header !font-normal"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          type: "spring",
          damping: 24,
          stiffness: 180,
          delay: 0.17,
        }}
      >
        Who We Are
      </motion.h2>

      <motion.p
        className="section-desc max-sm:!max-w-110 sm:max-w-110 md:max-w-full"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          type: "spring",
          damping: 24,
          stiffness: 180,
          delay: 0.22,
        }}
      >
        Solverdeck is a trusted IT consultancy dedicated to delivering smart,
        scalable, and future-ready solutions.
        <br /> We help organisations harness technology to optimise workflows,
        improve efficiency, and achieve <br /> sustainable growth through
        innovation.
      </motion.p>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            type: "spring",
            damping: 24,
            stiffness: 180,
            delay: 0.27,
          }}
        >
          <StatCard
            icon={<MdOutlineWorkHistory />}
            title="5+"
            description="Active Projects"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            type: "spring",
            damping: 24,
            stiffness: 180,
            delay: 0.35,
          }}
        >
          <StatCard
            icon={<BiSolidConversation />}
            title="15+"
            description="Successful Conversions"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            type: "spring",
            damping: 24,
            stiffness: 180,
            delay: 0.43,
          }}
        >
          <StatCard
            icon={<HiUsers />}
            title="12+"
            description="Satisfied Clients"
          />
        </motion.div>
      </div>

      {/* Values */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          type: "spring",
          damping: 24,
          stiffness: 180,
          delay: 0.12,
        }}
      >
        <SectionButton>Our Values</SectionButton>
      </motion.div>

      <motion.h2
        className="section-header !font-normal"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          type: "spring",
          damping: 24,
          stiffness: 180,
          delay: 0.17,
        }}
      >
        The Values Behind Solverdeck
      </motion.h2>

      <motion.p
        className="section-desc"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          type: "spring",
          damping: 24,
          stiffness: 180,
          delay: 0.22,
        }}
      >
        Our values shape everything we do at Solverdeck. From innovation to
        integrity, <br /> we’re committed to building AI solutions that empower
        businesses and drive real impact.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            type: "spring",
            damping: 24,
            stiffness: 180,
            delay: 0.27,
          }}
        >
          <InfoCard
            icon={<PiLightbulbFill />}
            title="Driving Innovation Forward"
            description="We embrace cutting-edge AI to create smarter, more efficient automation solutions."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            type: "spring",
            damping: 24,
            stiffness: 180,
            delay: 0.35,
          }}
        >
          <InfoCard
            icon={<FaRegHandshake />}
            title="Committed to Integrity & Trust"
            description="Trust and transparency are at the core of everything we do for our clients."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            type: "spring",
            damping: 24,
            stiffness: 180,
            delay: 0.43,
          }}
        >
          <InfoCard
            icon={<PiRocketLaunchFill />}
            title="Empowering Business Growth"
            description="We help businesses scale faster with AI-driven efficiency, reducing manual tasks and unlocking new opportunities."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            type: "spring",
            damping: 24,
            stiffness: 180,
            delay: 0.51,
          }}
        >
          <InfoCard
            icon={<HiUsers />}
            title="Putting Customers First"
            description="Your success is our priority—we build solutions that truly make an impact."
          />
        </motion.div>
      </div>

      {/* Our Projects */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          type: "spring",
          damping: 24,
          stiffness: 180,
          delay: 0.12,
        }}
      >
        <SectionButton>Our Projects</SectionButton>
      </motion.div>

      <motion.h2
        className="section-header !font-normal"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          type: "spring",
          damping: 24,
          stiffness: 180,
          delay: 0.17,
        }}
      >
        Our Recent Projects
      </motion.h2>

      <div className="container mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
          {projects.slice(0, 2).map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                type: "spring",
                damping: 24,
                stiffness: 180,
                delay: 0.2 + index * 0.1,
              }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
            >
              {/* Image Container */}
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.name}
                  width={800}
                  height={450}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content Container */}
              <div className="p-6">
                <Link
                  href={project.link}
                  className="inline-block text-xl font-bold text-white hover:text-blue-400 transition-colors mb-2"
                >
                  {project.name}
                </Link>
                <p className="text-white/70 text-sm line-clamp-3 mb-4">
                  {project.descp}
                </p>
                <Link
                  href={project.link}
                  className="text-sm font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1"
                >
                  View Project <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Projects CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            type: "spring",
            damping: 24,
            stiffness: 180,
            delay: 0.3,
          }}
          className="my-12 flex justify-center"
        >
          <Link href="/case-studies">
            <Button className="px-6 py-3 bg-[#193cb8] text-white text-lg rounded-lg shadow-md hover:bg-[#193cb8]/90 transition-colors">
              View All Case Studies
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Why Us */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          type: "spring",
          damping: 24,
          stiffness: 180,
          delay: 0.12,
        }}
      >
        <SectionButton>Why us</SectionButton>
      </motion.div>

      <motion.h2
        className="section-header !font-normal !text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          type: "spring",
          damping: 24,
          stiffness: 180,
          delay: 0.17,
        }}
      >
        What makes us stand <br /> out in the industry
      </motion.h2>

      <motion.p
        className="section-desc"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          type: "spring",
          damping: 24,
          stiffness: 180,
          delay: 0.22,
        }}
      >
        Discover how our innovative strategies, data-driven approach, and <br />
        commitment to results set us apart from the competition
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            type: "spring",
            damping: 24,
            stiffness: 180,
            delay: 0.27,
          }}
        >
          <StatCard
            icon={<PiRocketLaunchFill />}
            title="Streamline Operations"
            description="Automate workflows and optimize your business processes."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            type: "spring",
            damping: 24,
            stiffness: 180,
            delay: 0.35,
          }}
        >
          <StatCard
            icon={<PiLightbulbFill />}
            title="Data-Driven Insights"
            description="Transform raw data into actionable business intelligence."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            type: "spring",
            damping: 24,
            stiffness: 180,
            delay: 0.43,
          }}
        >
          <StatCard
            icon={<MdAutoGraph />}
            title="Scalable Solutions"
            description="Future-proof systems that grow with your business."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            type: "spring",
            damping: 24,
            stiffness: 180,
            delay: 0.51,
          }}
        >
          <StatCard
            icon={<MdOutlineWorkspacePremium />}
            title="Enterprise Value"
            description="Premium solutions at competitive price points."
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ type: "spring", damping: 24, stiffness: 180, delay: 0.6 }}
      >
        <FeatureCard />
      </motion.div>
    </div>
  );
};

export default About;
