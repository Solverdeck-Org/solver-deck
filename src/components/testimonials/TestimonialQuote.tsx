import type { GetHomepageTestimoniesQueryResult } from "@/sanity/types";

type Testimonial = NonNullable<GetHomepageTestimoniesQueryResult>[number];

interface TestimonialQuoteProps {
  testimonials: Testimonial[];
  activeIndex: number;
}

function byline(t: Testimonial) {
  return [t.roles?.filter(Boolean).join(" & "), t.company].filter(Boolean).join(", ");
}

export function TestimonialQuote({ testimonials, activeIndex }: TestimonialQuoteProps) {
  return (
    <div className="max-w-lg relative">
      {testimonials.map((t, idx) => (
        <div
          key={t._id}
          className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            idx === activeIndex
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
          }`}
        >
          <div className="border-l-2 border-white/30 pl-6">
            <p className="text-white/90 text-base md:text-lg leading-relaxed font-outfit">
              &ldquo;{t.testimony}&rdquo;
            </p>
            {(t.name || t.roles || t.company) && (
              <div className="mt-4 font-outfit">
                {t.name && <div className="text-white font-medium text-sm">{t.name}</div>}
                {byline(t) && <div className="text-white/50 text-xs mt-0.5">{byline(t)}</div>}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
