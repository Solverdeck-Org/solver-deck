"use client";

import { useActionState, useState } from "react";
import { submitTestimonial } from "./actions";

const LABEL = "text-xs font-mono uppercase tracking-widest text-white mb-2 block";

function inputClass(hasError: boolean) {
  return `w-full bg-white/[0.04] border ${hasError ? "border-red-400/60" : "border-white/10"} rounded-xl px-5 py-4 text-base text-white placeholder:text-white/20 focus:outline-hidden focus:border-white/30 transition`;
}

export function TestimonialSubmitForm() {
  const [state, action, pending] = useActionState(submitTestimonial, { success: false });
  const [testimony, setTestimony] = useState("");
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");

  const testimonyError = state.error && testimony.trim().length < 10;

  if (state.success) {
    return (
      <div className="text-center py-12">
        <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-white text-xl font-semibold font-outfit mb-2">Thank you!</h3>
        <p className="text-white text-base">
          Your testimonial has been received. We&apos;ll review it and add it to the site shortly.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-5">
      <div>
        <label htmlFor="testimony" className={LABEL}>
          Your Testimonial <span className="text-white">*</span>
        </label>
        <textarea
          id="testimony"
          name="testimony"
          rows={5}
          placeholder="Tell us about your experience working with Solverdeck…"
          className={`${inputClass(!!testimonyError)} resize-none`}
          value={testimony}
          onChange={(e) => setTestimony(e.target.value)}
        />
        {testimonyError && (
          <p className="text-red-400 text-xs font-mono mt-1">{state.error}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={LABEL}>Your Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Jane Smith"
            className={inputClass(false)}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="jobTitle" className={LABEL}>Job Title</label>
          <input
            id="jobTitle"
            name="jobTitle"
            type="text"
            placeholder="Marketing Director"
            className={inputClass(false)}
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className={LABEL}>Company</label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Acme Ltd."
          className={inputClass(false)}
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      {state.error && !testimonyError && (
        <p className="text-red-400 text-sm font-mono">{state.error}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-2 w-full bg-primary hover:bg-primary/90 text-white font-outfit font-semibold text-base py-4 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {pending ? "Submitting…" : "Submit Testimonial"}
      </button>
    </form>
  );
}
