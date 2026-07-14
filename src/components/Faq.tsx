import { sanityFetch } from "@/sanity/lib/live";
import { getAllFaqsQuery } from "@/sanity/lib/queries";
import { FaqItem } from "@/components/faq/FaqItem";
import { JsonLd } from "@/components/JsonLd";

export async function Faq() {
  const { data: faqs } = await sanityFetch({ query: getAllFaqsQuery });

  const validFaqs = faqs.filter(
    (f): f is typeof f & { question: string; answer: string } =>
      f.question !== null && f.answer !== null,
  );

  if (!validFaqs.length) return null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: validFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="px-5 sm:px-8 py-16 sm:py-32">
      <JsonLd data={faqSchema} />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-32 items-start">
          <div className="lg:sticky lg:top-32">
            <p className="text-white font-mono text-xs uppercase tracking-widest mb-6">FAQ</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
              Frequently asked questions
            </h2>
            <p className="text-white text-base leading-relaxed">
              Everything you need to know before we start working together.
              Can&apos;t find an answer?{" "}
              <a href="/contact" className="text-white underline underline-offset-4 hover:text-white/70 transition">
                Just ask us.
              </a>
            </p>
          </div>
          <div className="border-t border-white/10">
            {validFaqs.map((faq, i) => (
              <FaqItem key={faq._id} question={faq.question} answer={faq.answer} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
