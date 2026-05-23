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
    <div className="flex flex-col gap-2 max-w-md">
      <form action={action} className="flex gap-2">
        <input
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`flex-1 bg-white/5 border ${state.error ? "border-red-400/60" : "border-white/10"} rounded-full px-5 py-3 text-sm text-white placeholder:text-white/30 focus:outline-hidden focus:border-white/30 transition`}
        />
        <button
          type="submit"
          disabled={isPending}
          className="px-6 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition disabled:opacity-50 shrink-0"
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
