import type { Slide } from "./slides";

interface SolutionContentProps {
  slide: Slide;
  contentRef: React.RefObject<HTMLDivElement | null>;
  cardsContainerRef: React.RefObject<HTMLDivElement | null>;
}

export function SolutionContent({ slide, contentRef, cardsContainerRef }: SolutionContentProps) {
  const ActiveCards = slide.Cards;
  return (
    <>
      <div ref={contentRef} className="flex flex-col gap-12 md:gap-16">
        <h2 className="section-heading max-w-7xl wrap-break-word">{slide.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start font-outfit">
          <div className="md:col-span-5">
            <h3 className="section-subheading wrap-break-word">{slide.subheading}</h3>
          </div>
          <div className="md:col-span-6 lg:col-span-5 flex flex-col gap-6">
            <p className="section-description wrap-break-word">{slide.description}</p>
            <div className="flex flex-wrap gap-2.5 mt-2">
              {slide.highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-outfit text-white/80 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div ref={cardsContainerRef} className="relative w-full">
        <ActiveCards />
      </div>
    </>
  );
}
