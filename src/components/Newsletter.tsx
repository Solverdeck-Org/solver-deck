import { NewsletterForm } from "./footer/NewsletterForm";

export function Newsletter() {
  return (
    <section className="relative bg-black border-t border-white/5 px-5 sm:px-8 py-20 sm:py-28 md:py-36">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        <p className="font-outfit text-xs sm:text-sm tracking-widest uppercase text-white/50">
          Stay in the loop
        </p>
        <h2 className="font-outfit font-medium text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.05] text-white">
          Updates on our latest <br className="hidden sm:block" /> projects and
          news
        </h2>
        <p className="font-outfit text-base sm:text-lg text-white/60 max-w-xl">
          Practical insights on web design and AI automation for UK businesses
          — straight to your inbox. No spam, unsubscribe anytime.
        </p>
        <div className="w-full max-w-xl mt-4">
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
