import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useEffect, useRef } from "react";
import { phases } from "./types";

export function useProcessScroll(onPhaseChange: (index: number) => void) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textScrollRef = useRef<HTMLDivElement>(null);

  const setActiveIndex = useCallback(
    (index: number) => {
      onPhaseChange(index);
      window.history.pushState(null, "", `#${phases[index].id}`);
    },
    [onPhaseChange],
  );

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const index = phases.findIndex((p) => `#${p.id}` === hash);
      if (index !== -1) onPhaseChange(index);
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [onPhaseChange]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const blocks = gsap.utils.toArray<HTMLElement>(".phase-content-block");
      blocks.forEach((block, index) => {
        ScrollTrigger.create({
          trigger: block,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => { if (self.isActive) setActiveIndex(index); },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [setActiveIndex]);

  return { sectionRef, textScrollRef };
}
