"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

// Data structures for the menus
const menus = {
  products: {
    columns: [
      {
        title: "SOLVERDECK PRODUCTS",
        items: [
          { name: "Kontinue AI", href: "https://kontinueai.com/" },
          { name: "Present", href: "https://present.c-technology-inc.com/" },
        ],
      },
    ],
  },
  caseStudies: {
    columns: [
      {
        title: "CLIENT PROJECTS",
        items: [
          { name: "Client Project 1", href: "#" },
          { name: "Client Project 2", href: "#" },
        ],
      },
    ],
  },
  resources: {
    columns: [
      {
        title: "LEARN",
        items: [{ name: "Blog", href: "#" }],
      },
    ],
  },
};

export function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // The mega menu content
  const renderMegaMenu = () => {
    if (!activeMenu) return null;
    const menuData = menus[activeMenu as keyof typeof menus];
    if (!menuData) return null;

    return (
      // biome-ignore lint/a11y/noStaticElementInteractions: the megamenu wrapper requires pointer tracking
      <div
        className="absolute top-full left-0 right-0 w-full bg-black text-white py-16 flex justify-center shadow-2xl"
        onMouseEnter={() => setActiveMenu(activeMenu)}
      >
        <div className="max-w-6xl px-8 w-full flex justify-between items-start gap-24">
          <div className="flex gap-24 flex-1">
            {menuData.columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-5">
                {col.title && (
                  <h3 className="text-[11px] text-[#8a8a8a] tracking-widest font-medium uppercase">
                    {col.title}
                  </h3>
                )}
                <ul className="flex flex-col gap-4">
                  {col.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-3xl font-outfit font-normal text-white hover:text-white/70 transition-colors flex items-center gap-3"
                      >
                        {item.name}
                        {item.name.includes("Agent") && (
                          <span className="text-[10px] bg-white text-black px-1.5 py-0.5 rounded-full font-bold uppercase tracking-tighter">
                            NEW
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right side featured card placeholder to match the Sanity look */}
          <div className="w-[500px] aspect-video bg-[#0a0a0a] p-10 relative overflow-hidden group cursor-pointer border border-white/5 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-outfit mb-3 text-white relative z-10 leading-tight font-medium">
                The only AI operating system
                <br />
                your business needs
              </h2>
            </div>

            <div className="relative z-10">
              <Button className="bg-white text-black hover:bg-white/90 rounded-full font-bold text-xs px-6 py-5">
                Start Your AI Transformation
              </Button>
            </div>

            {/* Abstract decorative elements to match the Sanity visual */}
            <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity">
              <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 w-80 h-80 border border-white/10 rounded-full group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <div className="w-full h-full bg-linear-to-tr from-primary/10 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const navItemClass = (menuName: string) =>
    `uppercase px-4 py-2 rounded-full transition-colors duration-200 cursor-pointer whitespace-nowrap ${
      activeMenu === menuName
        ? "bg-white/10 text-white"
        : "text-white hover:bg-white/10"
    }`;

  const hasActiveMenu = activeMenu !== null;

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: header needs to track mouse leave to close the menu
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-colors duration-300 font-outfit text-[13px] tracking-widest ${
        hasActiveMenu || scrolled ? "bg-black" : "bg-transparent hover:bg-black"
      }`}
      onMouseLeave={() => setActiveMenu(null)}
    >
      {/* Left: Logo */}
      <div className="flex-1 flex justify-start items-center">
        <Link href="/" onMouseEnter={() => setActiveMenu(null)}>
          <Image
            src="/sd.png"
            alt="Solverdeck Logo"
            width={100}
            height={100}
            className="object-contain"
            style={{ width: "auto", height: "32px" }}
            priority
          />
        </Link>
      </div>

      {/* Center: Nav links */}
      <div className="flex-1 justify-center hidden lg:flex">
        <nav className="flex items-center gap-1">
          <button
            type="button"
            className={navItemClass("products")}
            onMouseEnter={() => setActiveMenu("products")}
          >
            Products
          </button>
          <Link
            href="#solutions"
            className={navItemClass("solutions")}
            onMouseEnter={() => setActiveMenu(null)}
          >
            Solutions
          </Link>
          <button
            type="button"
            className={navItemClass("caseStudies")}
            onMouseEnter={() => setActiveMenu("caseStudies")}
          >
            Case Studies
          </button>
          <button
            type="button"
            className={navItemClass("resources")}
            onMouseEnter={() => setActiveMenu("resources")}
          >
            Resources
          </button>
          <Link
            href="/about"
            className={navItemClass("about")}
            onMouseEnter={() => setActiveMenu(null)}
          >
            About
          </Link>
          <Link
            href="/pricing"
            className={navItemClass("pricing")}
            onMouseEnter={() => setActiveMenu(null)}
          >
            Pricing
          </Link>
        </nav>
      </div>

      {/* Right: Buttons */}
      <div className="flex-1 flex items-center justify-end gap-4">
        <Button
          variant="ghost"
          className="uppercase bg-transparent! border border-white text-white hover:bg-white! hover:text-black! rounded-full h-11 px-6 text-xs tracking-widest transition-colors"
          onMouseEnter={() => setActiveMenu(null)}
        >
          Contact
        </Button>
        <Button
          className="uppercase bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-full h-11 px-6 font-bold text-xs tracking-widest"
          onMouseEnter={() => setActiveMenu(null)}
        >
          Book a consultation
        </Button>
      </div>

      {/* Mega Menu Dropdown */}
      {renderMegaMenu()}
    </header>
  );
}
