import type { Slide } from "./slides";

interface SolutionContentProps {
  slide: Slide;
  contentRef: React.RefObject<HTMLDivElement | null>;
  cardsContainerRef: React.RefObject<HTMLDivElement | null>;
}

export function SolutionContent({ slide, contentRef, cardsContainerRef }: SolutionContentProps) {
  return (
    <>
      <div ref={contentRef} className="flex flex-col gap-12 md:gap-16">
        <h2 className="section-heading max-w-7xl wrap-break-word">{slide.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start font-outfit">
          <div className="md:col-span-5">
            <h3 className="section-subheading wrap-break-word">{slide.subheading}</h3>
          </div>
          <div className="md:col-span-6 lg:col-span-7 flex flex-col gap-6">
            <p className="section-description wrap-break-word">{slide.description}</p>
          </div>
        </div>
      </div>
      <div ref={cardsContainerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative w-full mt-4 md:mt-8">
        {slide.services.map((service) => (
          <div key={service.title} className="feature-card flex flex-col gap-3 p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <h4 className="text-xl font-medium text-white">{service.title}</h4>
            <p className="text-white/60 leading-relaxed text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
