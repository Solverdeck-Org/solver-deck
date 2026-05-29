import Link from "next/link";

export function WhyChooseUs() {
  return (
    <section className="relative bg-white text-black border-t border-black/5 px-5 sm:px-8 md:px-12 pt-16 sm:pt-24 pb-16 sm:pb-24">
      <p className="font-mono text-xs tracking-widest uppercase text-primary mb-6 sm:mb-8">
        Why choose us
      </p>

      <div className="max-w-4xl space-y-8">
        <p className="font-outfit text-base sm:text-lg md:text-xl leading-relaxed text-black/80">
          At Solverdeck, we work with small businesses, local trades and independent operators who
          need a proper online presence without the enterprise price tag. Our web design packages
          start at{" "}
          <span className="text-black font-semibold">£299</span> for a professional website that
          loads fast, looks clean on mobile and is built to convert visitors into customers. On the
          AI side, we build chatbots, automation workflows, and AI agents that handle the repetitive
          parts of running a business. Customer enquiries answered automatically. Bookings confirmed
          without a back-and-forth. Admin tasks that used to take hours, done in seconds.
        </p>

        <p className="font-outfit text-base sm:text-lg md:text-xl leading-relaxed text-black/80">
          Our clients are based across{" "}
          <span className="text-black font-semibold">Hull, Yorkshire, and the rest of the UK</span>.
          They're plumbers, clinic owners, retailers and service businesses. They come to us because
          they want things built right, delivered fast, and maintained promptly. If you're a local
          business that looking for how to grow with AI but doesn't know where to start, that's
          exactly who we built this for.
        </p>

        <Link
          href="https://cal.com/solverdeck"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-white font-outfit font-medium text-base sm:text-lg hover:bg-black hover:text-white transition-all duration-300"
        >
          Book a free consultation
        </Link>
      </div>
    </section>
  );
}
