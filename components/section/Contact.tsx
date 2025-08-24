import React from "react";
import SectionButton from "../shared/SectionButton";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const Contact = () => {
  return (
    <div className="section" id="contact">
      <SectionButton>Contact</SectionButton>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="section-header">
            Ask whatever you have in <br /> your mind
          </h2>
          <p className="section-desc !text-left">
            Whether you have questions or are ready to discuss your business,{" "}
            <br /> we’re here to help. Reach out today.
          </p>

          <div className="flex flex-col gap-4 mt-10">
            <div className="flex gap-4 items-center">
              <AiOutlineMail className="size-6 text-white/60" />
              <a href="mailto:hr@solverdeck.com" className="text-white/60">
                hr@solverdeck.com
              </a>
            </div>
            <div className="flex gap-4 items-center">
              <FiPhone className="size-6 text-white/60" />
              <a href="tel:+44 7836327475" className="text-white/60">
                +44 7836327475
              </a>
            </div>
            <div className="flex gap-4 items-center">
              <SlLocationPin className="size-6 text-white/60" />
              <p className="text-white/60">Hull, England</p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label>Name</Label>
              <Input type="text" placeholder="name" className="placeholder:text-white/80" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Email</Label>
              <Input type="email" placeholder="email" className="placeholder:text-white/80" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Phone</Label>
              <Input type="tel" placeholder="phone" className="placeholder:text-white/80" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Company</Label>
              <Input type="text" placeholder="company" className="placeholder:text-white/80" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Message</Label>
              <Textarea placeholder="message" className="placeholder:text-white/80" />
            </div>
            <Button className="bg-[#350136] hover:bg-white hover:text-[#350136]">Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
