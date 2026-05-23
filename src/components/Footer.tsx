import Image from "next/image";
import Link from "next/link";
import { NewsletterForm } from "./footer/NewsletterForm";

const NAV_COLS = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Services", href: "/#services" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

const SOCIALS = [
  { label: "X", href: "https://x.com/solverdeck", src: "/X.svg" },
  {
    label: "Instagram",
    href: "https://instagram.com/solverdeck",
    src: "/instagram-icon.svg",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/solverdeck",
    src: "/linkedin.svg",
  },
  {
    label: "Facebook",
    href: "https://web.facebook.com/people/Solverdeck/61578877721977",
    src: "/facebook-icon.svg",
  },
];

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 overflow-hidden">
      <div className="px-5 sm:px-8 pt-14 sm:pt-20 pb-0">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 pb-16 border-b border-white/10">
          {/* Left — logo + social + newsletter */}
          <div className="flex flex-col gap-8 lg:max-w-xs">
            <div className="flex flex-col gap-4">
              <Link href="/">
                <Image
                  src="/sd.png"
                  alt="Solverdeck"
                  width={100}
                  height={32}
                  style={{ height: 28, width: "auto" }}
                  priority
                />
              </Link>
              <p className="text-white text-sm leading-relaxed">
                We build websites and AI tools for ambitious businesses.
              </p>
              <div className="flex gap-2">
                {SOCIALS.map(({ label, href, src }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="hover:scale-110 transition-transform"
                  >
                    <Image src={src} alt={label} width={20} height={20} />
                  </Link>
                ))}
              </div>
            </div>
            <div className="border-t border-white/10 pt-8">
              <p className="text-white font-semibold text-base mb-1">
                Stay in the loop
              </p>
              <p className="text-white text-sm mb-5">
                Updates on our latest projects and news.
              </p>
              <NewsletterForm />
            </div>
          </div>
          {/* Right — nav columns */}
          <div className="flex-1 grid grid-cols-3 gap-6 sm:gap-12 lg:gap-20 lg:flex lg:justify-end">
            {NAV_COLS.map((col) => (
              <div key={col.title}>
                <p className="text-white/60 font-mono text-[10px] uppercase tracking-widest mb-5">
                  {col.title}
                </p>
                <ul className="flex flex-col gap-3">
                  {col.links.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-white text-sm hover:text-white/70 transition"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Big name */}
      <div className="overflow-hidden relative text-center">
        <p
          className="text-[14vw] font-black tracking-[-0.04em] leading-none select-none px-6 pb-2"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.08) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          SOLVERDECK
        </p>
      </div>
      {/* Legal bar */}
      <div className="px-5 sm:px-8 py-6 border-t border-white/10">
        <p className="text-white text-xs leading-relaxed">
          Copyright © 2026 Solverdeck. | Registered with Companies House No.
          16597716 | Registered with the Information Commissioner&apos;s Office
          (ICO):{" "}
          <a
            href="https://ico.org.uk/ESDWebPages/Entry/ZC000982"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-white/70 transition"
          >
            ZC000982
          </a>
        </p>
      </div>
    </footer>
  );
}
