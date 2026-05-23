import Link from "next/link";

export function AboutCta() {
  return (
    <section className="px-8 py-32 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
            Ready to work with us?
          </h2>
          <p className="text-white text-lg leading-relaxed">
            Tell us what you&apos;re building. We&apos;ll get back to you with a tailored proposal within 24 hours.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <Link
            href="https://cal.com/solverdeck"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-white text-black font-semibold text-sm hover:bg-white/90 transition text-center"
          >
            Book a consultation
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition text-center"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
