import type { Metadata } from "next";
import Link from "next/link";
import { TestimonialSubmitForm } from "@/features/testimonials/TestimonialSubmitForm";

export const metadata: Metadata = {
  title: "Submit a Testimonial — Solverdeck",
  description: "Share your experience working with Solverdeck.",
  robots: { index: false, follow: false },
};

export default function TestimonialSubmitPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="pt-28 sm:pt-36 pb-32 px-5 sm:px-8 max-w-2xl mx-auto">
        <Link
          href="/testimonials"
          className="inline-flex items-center gap-2 text-white text-sm font-mono uppercase tracking-widest mb-10 hover:text-white/70 transition"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Testimonials
        </Link>

        <p className="font-mono text-xs tracking-[0.2em] uppercase text-white mb-4">
          Share Your Story
        </p>
        <h1 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight mb-4">
          How was your experience?
        </h1>
        <p className="text-white text-base leading-relaxed mb-12">
          We genuinely appreciate your feedback. Only your testimonial is
          required — everything else is optional. We review all submissions
          before publishing.
        </p>

        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 sm:p-8 md:p-12">
          <TestimonialSubmitForm />
        </div>
      </section>
    </main>
  );
}
