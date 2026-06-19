import Image from "next/image";
import Link from "next/link";

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
      <div className="px-5 sm:px-8 pt-8 sm:pt-10 pb-0">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 pb-8 border-b border-white/10">
          {/* Left — logo + social + newsletter */}
          <div className="flex flex-col gap-6 lg:max-w-xs">
            <div className="flex flex-col gap-3">
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
              <p className="text-white text-base sm:text-lg leading-relaxed max-w-[21rem]">
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
          </div>
          {/* Right — nav columns */}
          <div className="flex-1 grid grid-cols-3 gap-6 sm:gap-10 lg:gap-16 lg:flex lg:justify-end">
            {NAV_COLS.map((col) => (
              <div key={col.title}>
                <p className="text-white/60 font-mono text-xs uppercase tracking-widest mb-4">
                  {col.title}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-white text-base sm:text-lg hover:text-white/70 transition"
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
      {/* Legal bar */}
      <div className="px-5 sm:px-8 py-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-white/60 text-sm">
          © 2026 Solverdeck. All rights reserved.
        </p>
        <p className="text-white/60 text-sm">
          Companies House No. 16597716 · ICO:{" "}
          <a
            href="https://ico.org.uk/ESDWebPages/Entry/ZC000982"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-white transition"
          >
            ZC000982
          </a>
        </p>
      </div>
    </footer>
  );
}
