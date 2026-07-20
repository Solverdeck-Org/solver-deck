"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus, X } from "lucide-react";
import { useState } from "react";

const localBusinessServices = [
  {
    title: "Websites",
    content: "Professional, mobile-friendly websites for UK small businesses. We design high-converting sites for local trades, beauty salons, and professional services to build trust, rank high on Google, and convert local visitors into paying customers. Fully managed and SEO-optimised."
  },
  {
    title: "Mobile Apps",
    content: "Custom, high-speed iOS and Android mobile apps tailored to help your business engage users and boost sales."
  },
  {
    title: "Customer Service Assistants",
    content: "Smart assistants that answer customer questions, handle inquiries, collect feedback and capture leads 24/7."
  },
  {
    title: "Booking Systems",
    content: "Beauty businesses and salons featuring automated online booking systems. Secure client deposits, reduce costly no-shows by up to 40%, and manage your calendar effortlessly so you can focus on making your clients look amazing."
  },
  {
    title: "Local SEO",
    content: "Perfect for home services, salons, and local businesses looking to rank top 10, get direct phone calls, and book more jobs organically."
  },
  {
    title: "IT Consulting",
    content: "Custom software consulting to help growing businesses streamline operations and choose the right tech."
  },
  {
    title: "AI Agents",
    content: "Custom tools and automated workflows designed to eliminate repetitive tasks, cut cost by 60%, and save UK businesses up to 20 hours weekly of manual admin time"
  }
];

function AccordionItem({ title, content, isOpen, onClick }: { title: string, content: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-t border-white/20 last:border-b w-full">
      <button 
        type="button"
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left transition-colors hover:text-white/80"
      >
        <span className="text-xl sm:text-2xl font-outfit tracking-wide">{title}</span>
        {isOpen ? <X className="w-5 h-5 shrink-0 font-light" strokeWidth={1.5} /> : <Plus className="w-5 h-5 shrink-0 font-light" strokeWidth={1.5} />}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}
      >
        <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-xl mb-6">
          {content}
        </p>
        <Link 
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-black font-medium text-sm px-5 py-2.5 rounded-full hover:bg-white/90 transition-all duration-300"
        >
          Discover More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

export function Solutions() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="services" className="relative bg-black text-white pt-24 pb-32 overflow-hidden border-t border-white/5">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-[60vh] md:h-[80vh] pointer-events-none overflow-hidden select-none z-0 opacity-30">
        <Image src="https://res.cloudinary.com/dqovfvo29/image/upload/q_auto/f_auto/v1779195441/fb674d02-1583-4f13-b0a0-fde8963717ac_n75te3.jpg" alt="Solutions background backdrop" fill priority className="object-cover object-top" />
        <div className="absolute inset-0 bg-linear-to-b from-black/0 via-black/40 to-black" />
      </div>

      <div className="px-5 sm:px-8 md:px-16 lg:px-20 relative z-10 flex flex-col gap-16 md:gap-32 mt-10">
        
        {/* Service 1 */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-10 md:gap-16 lg:gap-24 items-start">
          <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl sticky top-24 hidden md:block w-full max-w-xl mx-auto">
            <Image 
              src="/strategy2.jpg" 
              alt="For Local Businesses & Trades" 
              fill 
              className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" 
            />
          </div>
          
          <div className="flex flex-col items-start w-full">
            <div className="mb-8 md:mb-12">
               <p className="text-white/50 text-sm md:text-base font-outfit uppercase tracking-widest mb-4">Our Services</p>
               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-medium tracking-tight">
                 For Local Businesses & Trades
               </h2>
            </div>
            
            {/* Mobile Image */}
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl mb-10 md:hidden">
              <Image 
                src="/strategy2.jpg" 
                alt="For Local Businesses & Trades" 
                fill 
                className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" 
              />
            </div>

            <div className="w-full flex flex-col">
              {localBusinessServices.map((service, idx) => (
                <AccordionItem 
                  key={service.title}
                  title={service.title}
                  content={service.content}
                  isOpen={openIndex === idx}
                  onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-white/10 max-w-7xl mx-auto" />

        {/* Service 2 */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-10 md:gap-16 lg:gap-24 items-start">
          <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl sticky top-24 hidden md:block w-full max-w-xl mx-auto">
            <Image 
              src="/implementation.jpg" 
              alt="For Startups & Enterprises" 
              fill 
              className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" 
            />
          </div>
          
          <div className="flex flex-col items-start w-full">
            <div className="mb-8 md:mb-12">
               <p className="text-white/50 text-sm md:text-base font-outfit uppercase tracking-widest mb-4">Enterprise Services</p>
               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-medium tracking-tight">
                 For Startups & Enterprises
               </h2>
            </div>

            {/* Mobile Image */}
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl mb-10 md:hidden">
              <Image 
                src="/implementation.jpg" 
                alt="For Startups & Enterprises" 
                fill 
                className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" 
              />
            </div>

            <p className="text-white/60 text-lg sm:text-xl leading-relaxed max-w-xl mb-8">
              Custom SaaS, APIs, and Native App development designed to scale securely and efficiently.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-black font-medium text-sm px-6 py-3 rounded-full hover:bg-white/90 transition-all duration-300"
            >
              Discover More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
