"use client";

import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Spinner } from "./ui/spinner";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!message) return;

    const t = setTimeout(() => {
      setMessage(null);
    }, 3000);

    return () => clearTimeout(t);
  }, [message]);

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data?.message || "Something went wrong");
        return;
      }

      setMessage(data?.message || "Subscribed");
      setEmail("");
    } catch {
      setMessage("Network error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubscribe}>
      <div className="flex flex-col space-y-2 mb-4">
        <p className="text-lg font-medium">Join our newsletter</p>

        <div className="relative w-full sm:max-w-sm">
          <Input
            type="email"
            placeholder="Enter your email"
            className="w-full h-12 pl-3 pr-28 border-border/20 placeholder:text-white/90"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Button
            type="submit"
            disabled={loading}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#1800AD] hover:bg-[#1800AD]/80 h-9 px-3 text-sm min-w-[110px] justify-center"
          >
            {loading ? <Spinner className="size-4" /> : "Subscribe"}
          </Button>
        </div>

        {message && <p className="text-sm mt-2">{message}</p>}
      </div>
    </form>
  );
};

export default NewsletterForm;
