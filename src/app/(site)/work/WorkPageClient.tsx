"use client";

import { useMemo, useState } from "react";
import type { SanityCaseStudy } from "@/components/CaseStudies";
import { CaseStudyCard } from "@/components/work/CaseStudyCard";

function useCategories(studies: SanityCaseStudy[]) {
  return useMemo(() => {
    const cats = new Set<string>();
    for (const s of studies) {
      for (const c of s.categories ?? []) {
        if (c) cats.add(c);
      }
    }
    return ["ALL", ...Array.from(cats)];
  }, [studies]);
}

export function WorkPageClient({ allCaseStudies }: { allCaseStudies: SanityCaseStudy[] }) {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const categories = useCategories(allCaseStudies);

  const filtered = useMemo(
    () => selectedCategory === "ALL" ? allCaseStudies : allCaseStudies.filter((s) => s.categories?.includes(selectedCategory)),
    [selectedCategory, allCaseStudies],
  );

  return (
    <div className="w-full relative z-10 flex flex-col gap-12 md:gap-16">
      <div className="flex flex-col gap-6 max-w-4xl font-outfit">
        <h1 className="text-4xl md:text-7xl font-medium tracking-tight leading-[1.05] text-white">
          Strategic partnerships, <br className="hidden md:block" /> engineered to perform.
        </h1>
        <p className="text-lg md:text-xl text-white leading-relaxed font-light max-w-2xl">
          An archive of enterprise-grade software systems, robust integrations, and premium digital products built for industry leaders.
        </p>
      </div>
      <div className="flex flex-col gap-4 border-y border-white/5 py-6">
        <span className="font-mono text-[9px] uppercase tracking-widest text-white font-semibold px-2">Filter by engineering domain:</span>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
          {categories.map((cat) => (
            <button key={cat} type="button" onClick={() => setSelectedCategory(cat)} className={`font-mono text-[10px] tracking-widest uppercase px-4 py-2.5 rounded-full border transition-all duration-300 shrink-0 cursor-pointer ${selectedCategory === cat ? "bg-primary text-white border-primary font-bold shadow-[0_0_20px_rgba(16,185,129,0.25)]" : "bg-white/3 border-white/10 text-white hover:border-white/20"}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="relative w-full overflow-visible">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((study) => <CaseStudyCard key={study._id} study={study} />)}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center border border-white/5 rounded-2xl bg-[#050505] p-8">
            <span className="font-mono text-xs text-white/30 mb-2">NO_CASES_FOUND</span>
            <p className="text-white/50 max-w-sm text-sm">We currently do not have matching case studies listed under this specific filter category. Check back soon for updates.</p>
          </div>
        )}
      </div>
    </div>
  );
}
