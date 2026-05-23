import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";

const BULLETS = [
  "Tell us about your website or product needs",
  "Get a custom proposal within 24 hours",
  "Explore how AI can accelerate your business",
];

const CONTACT_ITEMS = [
  { Icon: Mail, value: "hello@solverdeck.com", href: "mailto:hello@solverdeck.com" },
  { Icon: Phone, value: "(+44) 020 3836 3442", href: "tel:+442038363442" },
  { Icon: MapPin, value: "Hull, England", href: null as string | null },
];

const SOCIALS = [
  { label: "X", href: "https://x.com/solverdeck", src: "/X.svg" },
  { label: "Instagram", href: "https://instagram.com/solverdeck", src: "/instagram-icon.svg" },
  { label: "LinkedIn", href: "https://linkedin.com/company/solverdeck", src: "/linkedin.svg" },
  { label: "Facebook", href: "https://facebook.com/solverdeck", src: "/facebook-icon.svg" },
];

export function ContactLeft() {
  return (
    <div className="flex flex-col gap-10 lg:sticky lg:top-32">
      <div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
          Let&apos;s talk
        </h1>
        <div className="mt-8 border-t border-white/10" />
      </div>
      <ul className="flex flex-col gap-5">
        {BULLETS.map((b) => (
          <li key={b} className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-white mt-0.5 shrink-0" />
            <span className="text-white text-lg leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-5">
        {CONTACT_ITEMS.map(({ Icon, value, href }) =>
          href !== null ? (
            <a key={value} href={href} className="flex items-center gap-4 text-white hover:text-white/70 transition group">
              <Icon className="w-5 h-5 shrink-0" />
              <span className="text-lg">{value}</span>
            </a>
          ) : (
            <div key={value} className="flex items-center gap-4 text-white">
              <Icon className="w-5 h-5 shrink-0" />
              <span className="text-lg">{value}</span>
            </div>
          ),
        )}
      </div>
      <div className="flex gap-4">
        {SOCIALS.map(({ label, href, src }) => (
          <Link key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
            className="hover:scale-110 transition-transform">
            <Image src={src} alt={label} width={28} height={28} />
          </Link>
        ))}
      </div>
    </div>
  );
}
