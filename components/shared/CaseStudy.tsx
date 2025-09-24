import React from "react";
import { Card, CardContent } from "../ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

type Project = {
  name: string;
  descp: string;
  img: string;
  link: string;
};

const CaseStudy = ({ project, isInView }: { project: Project; isInView: boolean }) => {
  return (
    <Card className="overflow-hidden p-0 bg-transparent border border-white/20 shadow-lg">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT: Project Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-64 lg:h-auto"
          >
            <Image
              src={project.img}
              alt={project.name}
              width={800}
              height={800}
              className="w-full h-full object-cover rounded-none"
              priority
            />
            {/* Optional gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#193cb8]/40 to-transparent mix-blend-multiply" />
          </motion.div>

          {/* RIGHT: Project Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-8 lg:p-12 text-left"
          >
            <h3 className="mb-4 text-white text-2xl font-bold">
              {project.name}
            </h3>
            <p className="font-normal mb-6 text-white">{project.descp}</p>

            <Link href={project.link}>
              <Button className="group bg-[#193cb8] hover:bg-[#193cb8]/90 text-white">
                View Project
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
