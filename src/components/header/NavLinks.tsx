"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinksProps {
  activeMenu: string | null;
  onMenuEnter: (menu: string | null) => void;
}

function navItemClass(menuName: string, activeMenu: string | null, pathname: string, href: string) {
  const isHovered = activeMenu === menuName;
  const isCurrentPage = pathname === href || (href !== "/" && !href.startsWith("/#") && pathname.startsWith(href));
  const isActive = isHovered || isCurrentPage;

  return `uppercase px-4 py-2 rounded-full transition-colors duration-200 cursor-pointer whitespace-nowrap ${
    isActive
      ? "bg-white/10 text-white"
      : "text-white hover:bg-white/10"
  }`;
}

export function NavLinks({ activeMenu, onMenuEnter }: NavLinksProps) {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-1">
      <Link
        href="/#services"
        className={navItemClass("services", activeMenu, pathname, "/#services")}
        onMouseEnter={() => onMenuEnter(null)}
      >
        Services
      </Link>

      <Link
        href="/work"
        className={navItemClass("work", activeMenu, pathname, "/work")}
        onMouseEnter={() => onMenuEnter(null)}
      >
        Our Work
      </Link>
      <Link
        href="/blog"
        className={navItemClass("insight", activeMenu, pathname, "/blog")}
        onMouseEnter={() => onMenuEnter(null)}
      >
        Insight
      </Link>
      <Link
        href="/about"
        className={navItemClass("about", activeMenu, pathname, "/about")}
        onMouseEnter={() => onMenuEnter(null)}
      >
        About
      </Link>
      <Link
        href="/pricing"
        className={navItemClass("pricing", activeMenu, pathname, "/pricing")}
        onMouseEnter={() => onMenuEnter(null)}
      >
        Pricing
      </Link>
    </nav>
  );
}
