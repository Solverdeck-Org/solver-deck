import Image from "next/image";

export function AboutHeader() {
  return (
    <section className="bg-black pt-32 sm:pt-40 pb-16 sm:pb-24">
      <div className="w-full px-5 sm:px-8 md:px-16 lg:px-20">
        <div className="max-w-4xl">
          <p className="text-white/70 text-sm font-mono uppercase tracking-widest mb-6">About</p>
          <h1 className="text-5xl sm:text-7xl md:text-[5rem] lg:text-[6rem] font-medium text-white tracking-tight mb-16 sm:mb-24 leading-[1.05]">
            We are Solverdeck
          </h1>
          
          <div className="space-y-6 sm:space-y-8 max-w-3xl">
            <p className="text-2xl sm:text-3xl md:text-4xl text-white font-medium leading-tight">
              We build digital tools that help UK businesses run smoothly and grow.
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/80 leading-snug">
              Whether you need a fast website, custom software, or AI to automate your daily tasks, we create technology that solves real problems.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-5 sm:px-8 md:px-16 lg:px-20 mt-16 sm:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dqovfvo29/image/upload/v1785415701/pexels-anastasia-shuraeva-7647388_wqciai.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              priority
              unoptimized
            />
          </div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dqovfvo29/image/upload/v1785415686/pexels-thirdman-8470806_yunl8h.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              priority
              unoptimized
            />
          </div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dqovfvo29/image/upload/v1785415685/pexels-kampus-8439695_obdpke.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
