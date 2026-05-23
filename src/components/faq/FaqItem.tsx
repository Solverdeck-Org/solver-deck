"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  index: number;
}

export function FaqItem({ question, answer, index }: FaqItemProps) {
  const [open, setOpen] = useState(false);
  const num = String(index + 1).padStart(2, "0");

  return (
    <div className="border-b border-white/10 group">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-8 py-10 text-left cursor-pointer"
      >
        <span className="text-white font-mono text-sm pt-1 shrink-0">
          {num}
        </span>
        <span className="flex-1 text-white text-xl md:text-2xl font-medium leading-snug">
          {question}
        </span>
        <span className="shrink-0 mt-1">
          {open ? (
            <Minus className="w-5 h-5 text-white" />
          ) : (
            <Plus className="w-5 h-5 text-white" />
          )}
        </span>
      </button>
      {open && (
        <div className="pb-10 pl-16 pr-12">
          <p className="text-white text-lg leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
