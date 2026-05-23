import type { Metadata } from "next";
import { IBM_Plex_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SanityLive } from "@/sanity/lib/live";
import { ConsentManager } from "../components/consent-manager";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const SITE_URL = "https://solverdeck.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Solverdeck — Web Design, AI Automation & Software Development UK",
    template: "%s | Solverdeck",
  },
  description:
    "Solverdeck is a UK-based digital agency specialising in bespoke web design, AI automation, SaaS development, and digital marketing. Helping ambitious businesses grow online.",
  keywords: [
    "Solverdeck",
    "web design UK",
    "web development UK",
    "AI automation UK",
    "digital agency UK",
    "bespoke website design",
    "custom web development",
    "SaaS development UK",
    "AI chatbot development",
    "mobile app development UK",
    "website design company UK",
    "web design agency England",
    "AI solutions for business",
    "digital transformation UK",
    "SEO agency UK",
    "lead generation UK",
    "e-commerce development UK",
    "Next.js agency",
    "software development company UK",
    "Hull web design",
    "Hull digital agency",
    "Yorkshire web design",
    "small business website UK",
    "automation software UK",
    "machine learning UK",
  ],
  authors: [{ name: "Solverdeck", url: SITE_URL }],
  creator: "Solverdeck",
  publisher: "Solverdeck",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "Solverdeck",
    title: "Solverdeck — Web Design, AI Automation & Software Development UK",
    description:
      "UK-based digital agency building high-performance websites, AI automation tools, and bespoke software for ambitious businesses.",
    images: [
      {
        url: "/sd.png",
        width: 1200,
        height: 630,
        alt: "Solverdeck — Web & AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solverdeck — Web Design, AI Automation & Software Development UK",
    description:
      "UK digital agency building high-performance websites, AI tools, and bespoke software.",
    images: ["/sd.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full dark",
        "antialiased",
        ibmPlexMono.variable,
        outfit.variable,
      )}
    >
      <body className="min-h-full flex flex-col bg-black">
        <ConsentManager>
          {children}
          <SanityLive />
        </ConsentManager>
      </body>
    </html>
  );
}
