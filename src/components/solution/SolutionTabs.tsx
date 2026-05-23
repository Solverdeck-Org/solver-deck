import type { Slide } from "./slides";

interface SolutionTabsProps {
  slides: Slide[];
  selectedIndex: number;
  progress: number;
  onTabClick: (index: number) => void;
}

export function SolutionTabs({ slides, selectedIndex, progress, onTabClick }: SolutionTabsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-white/10 pb-2.5">
      {slides.map((slide, index) => {
        const isActive = index === selectedIndex;
        return (
          <button
            key={slide.id}
            type="button"
            onClick={() => onTabClick(index)}
            className="solution-tab flex flex-col items-start text-left gap-2 group pb-6 relative transition-colors duration-300 cursor-pointer"
          >
            <span className={`text-xs font-mono tracking-wider transition-colors ${isActive ? "text-white font-medium" : "text-white/40"}`}>
              0{index + 1}
            </span>
            <span className={`text-xl md:text-2xl font-medium font-outfit transition-colors ${isActive ? "text-white" : "text-white/50 group-hover:text-white/85"}`}>
              {slide.tabTitle}
            </span>
            <div className="absolute bottom-0 left-0 h-[2px] bg-white/5 w-full" />
            {isActive && (
              <div
                className="absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
