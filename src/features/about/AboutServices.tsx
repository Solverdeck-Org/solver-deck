import Link from "next/link";

const SERVICES = [
  { name: "Websites", href: "/#services" },
  { name: "Mobile Apps", href: "/#services" },
  { name: "Customer Service Assistants", href: "/#services" },
  { name: "Booking Systems", href: "/#services" },
  { name: "Local SEO", href: "/#services" },
  { name: "IT Consulting", href: "/#services" },
  { name: "AI Agents & Automation", href: "/#services" },
  { name: "SaaS Development", href: "/#services" },
];

export function AboutServices() {
  return (
    <section className="bg-white text-zinc-900 py-20 sm:py-28 lg:py-36 w-full border-t border-zinc-100">
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Title & Text */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-normal tracking-tight text-zinc-900 leading-[1.05] mb-6 sm:mb-8">
              Our Services
            </h2>
            <p className="text-2xl sm:text-3xl lg:text-[2.25rem] font-normal text-zinc-900 tracking-tight leading-tight mb-4 max-w-xl">
              Helping UK businesses grow through innovation, web design, AI automation, and bespoke software
            </p>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-lg">
              Discover our service specific pages to see what we can do to help your brand.
            </p>
          </div>

          {/* Right Column: Pill Badges */}
          <div className="lg:col-span-6 flex flex-wrap gap-3 sm:gap-4 items-center content-center lg:pl-6">
            {SERVICES.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className="rounded-full border border-zinc-400/80 px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base lg:text-lg font-normal text-zinc-700 hover:border-zinc-900 hover:text-zinc-900 hover:bg-zinc-50 transition-all duration-200"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
