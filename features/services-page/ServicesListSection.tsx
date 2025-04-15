"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services-list";

const ServicesListSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-primary/10 p-6 flex justify-center items-center">
                      <service.icon className="h-16 w-16 text-primary" />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-xl font-bold mb-3 gradient-text">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {service.description}
                      </p>

                      <ul className="mb-6 space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                              <div className="h-2 w-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-foreground/80">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Link href={service.link}>
                        <Button
                          variant="outline"
                          className="w-full border-primary text-primary hover:bg-primary/5"
                        >
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesListSection;
