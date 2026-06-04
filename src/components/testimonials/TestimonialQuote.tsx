import type { GetHomepageTestimoniesQueryResult } from "@/sanity/types";

type Testimonial = NonNullable<GetHomepageTestimoniesQueryResult>[number];

interface TestimonialQuoteProps {
  testimonial: Testimonial;
}

function byline(t: Testimonial) {
  return [t.roles?.filter(Boolean).join(" & "), t.company]
    .filter(Boolean)
    .join(", ");
}

export function TestimonialQuote({ testimonial: t }: TestimonialQuoteProps) {
  return (
    <div className="flex flex-col h-full p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
      <p className="text-white/90 text-sm md:text-base leading-relaxed font-outfit flex-1">
        &ldquo;{t.testimony}&rdquo;
      </p>
      {(t.name || t.roles || t.company) && (
        <div className="mt-5 pt-5 border-t border-white/10 font-outfit">
          {t.name && (
            <div className="text-white font-medium text-sm">{t.name}</div>
          )}
          {byline(t) && (
            <div className="text-white/50 text-xs mt-0.5">{byline(t)}</div>
          )}
        </div>
      )}
    </div>
  );
}
