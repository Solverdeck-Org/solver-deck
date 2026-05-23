import type { Metadata } from "next";
import { BeamsBackground } from "@/components/BeamsBackground";
import { ContactForm } from "@/features/contact/ContactForm";
import { ContactLeft } from "@/features/contact/ContactLeft";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Quote | Solverdeck",
  description:
    "Get in touch with Solverdeck. We work with UK businesses on web design, AI automation, and bespoke software. Book a free discovery call today.",
  alternates: { canonical: "https://solverdeck.com/contact" },
  openGraph: {
    title: "Contact Solverdeck — UK Digital Agency",
    description: "Book a free discovery call. Web design, AI automation, and bespoke software for UK businesses.",
    url: "https://solverdeck.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-black flex flex-col">
      <div className="absolute inset-0 z-0">
        <BeamsBackground />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-transparent to-black/70 pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />

      <div className="relative z-20 flex-1 flex items-center px-5 sm:px-8 py-24">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-28 items-center">
          <ContactLeft />
          <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
