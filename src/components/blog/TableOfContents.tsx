"use client";

import { useEffect, useState } from "react";

export interface Heading {
  id: string;
  text: string;
  level: "h2" | "h3";
}

export function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find all intersecting entries
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // If multiple are visible, pick the first one (top most)
          setActiveId(visibleEntries[0].target.id);
        }
      },
      { rootMargin: "-10% 0% -80% 0%" }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  return (
    <div className="flex flex-col gap-4 font-outfit">
      <h4 className="text-white font-semibold text-lg tracking-tight">On this page</h4>
      <nav className="flex flex-col gap-2.5 border-l border-white/10">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={`block transition-all duration-200 border-l-[3px] -ml-[2px] py-0.5 ${
              heading.level === "h3" ? "pl-7 text-sm" : "pl-4 text-base"
            } ${
              activeId === heading.id
                ? "border-primary text-white font-medium"
                : "border-transparent text-white/50 hover:text-white hover:border-white/30"
            }`}
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById(heading.id);
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
                history.pushState(null, "", `#${heading.id}`);
              }
            }}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
}
