import "@/lib/fix-local-storage";
import type { Metadata } from "next";
import { Inter, Poppins, Outfit } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";
import { ConsentManager } from "./consent-manager";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Solverdeck",
  description:
    "Smart software applications to drive business growth with solutions",
  keywords: [
    "Solverdeck",
    "Solverdeck IT Consultation",
    "SD IT Consultation",
    "Solverdeck AI",
    "Solverdeck Automation",
    "Solverdeck Business Solutions",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} relative w-full`}>
        <ConsentManager>
          <NavBar />
          {children}
          <FloatingChat />
          <Footer />
        </ConsentManager>
      </body>
    </html>
  );
}
