// components/Contact.tsx
"use client";

import React from "react";
import { motion } from "motion/react"; // ✅ using motion/react
import SectionButton from "../shared/SectionButton";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [error, setError] = React.useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    const form = e.currentTarget;

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value.trim(),
      phone: (form.elements.namedItem("phone") as HTMLInputElement)?.value.trim(),
      company: (form.elements.namedItem("company") as HTMLInputElement)?.value.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value.trim(),
      hp: (form.elements.namedItem("website") as HTMLInputElement)?.value, // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || "Failed to send");
      }

      setStatus("success");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Something went wrong");
    }
  }

  return (
    <div className="section" id="contact">
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ type: "spring", damping: 24, stiffness: 180, delay: 0 }}
      >
        <SectionButton>Contact</SectionButton>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left column */}
        <div>
          <motion.h2
            className="section-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ type: "spring", damping: 24, stiffness: 180, delay: 0.05 }}
          >
            Ask whatever you have in <br /> your mind
          </motion.h2>

          <motion.p
            className="section-desc !text-left"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ type: "spring", damping: 24, stiffness: 180, delay: 0.1 }}
          >
            Whether you have questions or are ready to discuss your business,{" "}
            <br /> we’re here to help. Reach out today.
          </motion.p>

          <div className="flex flex-col gap-4 mt-10">
            <motion.div
              className="flex gap-4 items-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ type: "spring", damping: 24, stiffness: 180, delay: 0.15 }}
            >
              <AiOutlineMail className="size-6 text-white/60" />
              <a href="mailto:hr@solverdeck.com" className="text-white/60">
                hr@solverdeck.com
              </a>
            </motion.div>

            <motion.div
              className="flex gap-4 items-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ type: "spring", damping: 24, stiffness: 180, delay: 0.22 }}
            >
              <FiPhone className="size-6 text-white/60" />
              <a href="tel:+447836327475" className="text-white/60">
                +44 7836327475
              </a>
            </motion.div>

            <motion.div
              className="flex gap-4 items-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ type: "spring", damping: 24, stiffness: 180, delay: 0.29 }}
            >
              <SlLocationPin className="size-6 text-white/60" />
              <p className="text-white/60">Hull, England</p>
            </motion.div>
          </div>
        </div>

        {/* Right column: form */}
        <div className="mt-10">
          <motion.form
            className="flex flex-col gap-4"
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ type: "spring", damping: 24, stiffness: 180, delay: 0.15 }}
          >
            {/* Honeypot field (hidden) */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <motion.div
              className="flex flex-col gap-2"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ type: "spring", damping: 24, stiffness: 180, delay: 0.2 }}
            >
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="name"
                required
                className="placeholder:text-white/80"
              />
            </motion.div>

            <motion.div
              className="flex flex-col gap-2"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ type: "spring", damping: 24, stiffness: 180, delay: 0.27 }}
            >
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="email"
                required
                className="placeholder:text-white/80"
              />
            </motion.div>

            <motion.div
              className="flex flex-col gap-2"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ type: "spring", damping: 24, stiffness: 180, delay: 0.34 }}
            >
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="phone"
                className="placeholder:text-white/80"
              />
            </motion.div>

            <motion.div
              className="flex flex-col gap-2"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ type: "spring", damping: 24, stiffness: 180, delay: 0.41 }}
            >
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="company"
                className="placeholder:text-white/80"
              />
            </motion.div>

            <motion.div
              className="flex flex-col gap-2"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ type: "spring", damping: 24, stiffness: 180, delay: 0.48 }}
            >
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="message"
                required
                className="placeholder:text-white/80"
              />
            </motion.div>

            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ type: "spring", damping: 24, stiffness: 180, delay: 0.55 }}
            >
              <Button
                disabled={status === "loading"}
                className="bg-[#350136] hover:bg-white hover:text-[#350136]"
              >
                {status === "loading" ? "Sending..." : "Submit"}
              </Button>

              <span aria-live="polite" className="text-sm">
                {status === "success" && "Thanks! We’ll get back to you soon."}
                {status === "error" && (
                  <span className="text-red-400">{error}</span>
                )}
              </span>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
