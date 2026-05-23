"use client";

import { useActionState, useState } from "react";
import { sendContactEmail, type ContactState } from "./actions";

const INITIAL: ContactState = { success: false };

const LABEL = "text-xs font-mono uppercase tracking-widest text-white mb-2 block";

function inputClass(hasError: boolean) {
  return `w-full bg-[#111] border ${hasError ? "border-red-400/60" : "border-white/10"} rounded-xl px-5 py-4 text-base text-white placeholder:text-white/20 focus:outline-hidden focus:border-white/30 transition`;
}

export function ContactForm() {
  const [state, action, isPending] = useActionState(sendContactEmail, INITIAL);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  if (state.success) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center gap-3">
        <p className="text-white text-2xl font-semibold">Message sent!</p>
        <p className="text-white text-sm">We&apos;ll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-5">
      <div>
        <label htmlFor="name" className={LABEL}>Full Name *</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Jane Smith"
          className={inputClass(false)}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="email" className={LABEL}>Work Email *</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jane@company.com"
          className={inputClass(false)}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className={LABEL}>Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+44 7000 000000"
            className={inputClass(false)}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
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
      </div>

      <div>
        <label htmlFor="message" className={LABEL}>Message *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={7}
          placeholder="Tell us about your project…"
          className={`${inputClass(false)} resize-none`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      {state.error && (
        <p className="text-red-400 text-xs font-mono">{state.error}</p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="mt-2 w-full py-5 rounded-xl bg-white text-black font-semibold text-base hover:bg-white/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
