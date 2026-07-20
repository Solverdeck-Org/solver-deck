"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import type { GetNavbarCaseStudiesQueryResult } from "@/sanity/types";
import { MegaMenu } from "./header/MegaMenu";
import { MobileMenu } from "./header/MobileMenu";
import { NavLinks } from "./header/NavLinks";
import { type MenuData, menus } from "./header/menus";

type NavCaseStudy = NonNullable<GetNavbarCaseStudiesQueryResult>[number];

interface HeaderProps {
  navCaseStudies?: NavCaseStudy[];
}

export function Header({ navCaseStudies = [] }: HeaderProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const hasActiveMenu = activeMenu !== null;

  const caseStudiesMenu: MenuData = {
    columns: [
      {
        title: "CLIENT PROJECTS",
        items: navCaseStudies.length > 0
          ? navCaseStudies.map((s) => ({ name: s.name ?? "", href: s.link ?? "#" }))
          : [{ name: "View all projects", href: "/work" }],
      },
    ],
  };

  const activeMenuData: MenuData | null = activeMenu
    ? (activeMenu === "caseStudies" ? caseStudiesMenu : (menus[activeMenu] ?? null))
    : null;

  return (
    <>
      {/* biome-ignore lint/a11y/noStaticElementInteractions: header tracks mouse leave to close menu */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 py-4 transition-colors duration-300 font-outfit text-[13px] tracking-widest ${
          hasActiveMenu || scrolled || mobileOpen ? "bg-black" : "bg-transparent hover:bg-black"
        }`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        {/* Logo */}
        <div className="flex-1 flex justify-start items-center">
          <Link href="/" onMouseEnter={() => setActiveMenu(null)}>
            <Image
              src="/sd.png"
              alt="Solverdeck Logo"
              width={100}
              height={100}
              className="object-contain"
              style={{ width: "auto", height: "28px" }}
              priority
            />
          </Link>
        </div>

        {/* Desktop nav — hidden on mobile */}
        <div className="flex-1 justify-center hidden lg:flex">
          <NavLinks activeMenu={activeMenu} onMenuEnter={setActiveMenu} />
        </div>

        {/* Desktop buttons — hidden on mobile */}
        <div className="hidden lg:flex flex-1 items-center justify-end gap-4">
          <Link
            href="/contact"
            className="uppercase border border-white text-white hover:bg-white hover:text-black rounded-full h-11 px-6 text-xs tracking-widest transition-colors inline-flex items-center justify-center font-medium"
            onMouseEnter={() => setActiveMenu(null)}
          >
            Contact Us
          </Link>
          <Link
            href="tel:+442038363442"
            className="bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-full h-11 px-6 font-bold text-xs tracking-widest transition-colors inline-flex items-center justify-center gap-2"
            onMouseEnter={() => setActiveMenu(null)}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>020 3836 3442</span>
          </Link>
        </div>

        {/* Mobile buttons — visible on mobile only */}
        <div className="flex lg:hidden items-center gap-3">
          {!mobileOpen && (
            <Link
              href="tel:+442038363442"
              className="bg-primary text-white rounded-full h-10 px-4 text-[11px] tracking-widest transition-colors inline-flex items-center justify-center gap-2 font-semibold"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              <span>020 3836 3442</span>
            </Link>
          )}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="w-10 h-10 flex items-center justify-center"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop mega menu */}
        {activeMenu && activeMenuData && (
          <MegaMenu activeMenu={activeMenu} menuData={activeMenuData} onMouseEnter={() => setActiveMenu(activeMenu)} />
        )}
      </header>

      {/* Mobile menu overlay */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} caseStudiesMenu={caseStudiesMenu} />
    </>
  );
}
