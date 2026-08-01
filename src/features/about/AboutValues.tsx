import Image from "next/image";

const BRANDS = [
  {
    name: "Oshiclo",
    logo: "https://www.oshiclo.com/cdn/shop/files/8887DE0F-D14D-4CF0-8CC4-00DA4273EEF9.jpg?v=1737671900&width=390",
  },
  {
    name: "Keeola",
    logo: "https://keeola-store.vercel.app/keeola-logo.png",
  },
  {
    name: "Kontinue AI",
    logo: "https://kontinueai.com/kontinueai.svg",
  },
];

const VALUES = [
  "Web & Mobile Excellence",
  "Scalable Tech Architecture",
  "User-Centric Digital Design",
  "Modern AI Integration",
  "Make Every Touchpoint Count",
];

export function AboutValues() {
  return (
    <section className="bg-white text-zinc-900 py-20 sm:py-28 lg:py-36 w-full">
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-20">
        {/* Brands Section */}
        <div className="mb-24 sm:mb-32 lg:mb-40">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-normal tracking-tight text-zinc-900 leading-[1.05] mb-12 lg:mb-16">
            Brands we have worked with
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl">
            {BRANDS.map(({ name, logo }) => (
              <div
                key={name}
                className="relative aspect-[4/3] rounded-[24px] bg-black/[0.04] flex items-center justify-center p-6 sm:p-8 overflow-hidden transition-all duration-300 hover:shadow-md hover:bg-black/[0.07]"
              >
                <Image
                  src={logo}
                  alt={name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-6"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>

        {/* What Matters to Us Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Left Column: Image with rounded corners */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[4/4.5] sm:aspect-[4/3] lg:aspect-[4/4.5] rounded-[24px] overflow-hidden bg-zinc-100 shadow-sm">
              <Image
                src="https://res.cloudinary.com/dqovfvo29/image/upload/v1785487262/pexels-anntarazevich-8110791_kep8sl.jpg"
                alt="What matters to us at Solverdeck"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
                unoptimized
              />
            </div>
          </div>

          {/* Right Column: Huge text & large list items */}
          <div className="lg:col-span-6 lg:col-start-7 mt-12 lg:mt-0 flex flex-col justify-center">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-normal tracking-tight text-zinc-900 mb-6 leading-[1.05]">
              What matters to us
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed mb-12 sm:mb-16 max-w-xl">
              We partner with ambitious companies to engineer high-performance websites, scalable web applications, and intuitive mobile solutions.
            </p>

            {/* List with clean horizontal divider lines & huge text */}
            <div className="w-full">
              {VALUES.map((value) => (
                <div
                  key={value}
                  className="border-b border-zinc-900/80 py-5 sm:py-6 text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-normal text-zinc-900 tracking-tight leading-tight"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
