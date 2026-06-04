"use client";

import { useActionState, useEffect, useState } from "react";
import { subscribeToNewsletter, type NewsletterState } from "@/features/newsletter/actions";

const INITIAL: NewsletterState = { success: false };

export function NewsletterForm() {
  const [state, action, isPending] = useActionState(subscribeToNewsletter, INITIAL);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (state.success) setEmail("");
  }, [state.success]);

  if (state.success) {
    return <p className="text-white text-sm">You&apos;re subscribed! Welcome aboard.</p>;
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      <form action={action} className="flex flex-col sm:flex-row gap-3">
        <input
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`flex-1 bg-white/5 border ${state.error ? "border-red-400/60" : "border-white/10"} rounded-full px-7 py-4 text-base sm:text-lg text-white placeholder:text-white/30 focus:outline-hidden focus:border-white/30 transition`}
        />
        <button
          type="submit"
          disabled={isPending}
          className="px-8 py-4 rounded-full bg-white text-black text-base sm:text-lg font-semibold hover:bg-white/90 transition disabled:opacity-50 shrink-0"
        >
          {isPending ? "…" : "Subscribe"}
        </button>
      </form>
      {state.error && (
        <p className="text-red-400 text-xs font-mono px-1">{state.error}</p>
      )}
    </div>
  );
}
