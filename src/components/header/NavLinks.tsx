import Link from "next/link";

interface NavLinksProps {
  activeMenu: string | null;
  onMenuEnter: (menu: string | null) => void;
}

function navItemClass(menuName: string, activeMenu: string | null) {
  return `uppercase px-4 py-2 rounded-full transition-colors duration-200 cursor-pointer whitespace-nowrap ${
    activeMenu === menuName
      ? "bg-white/10 text-white"
      : "text-white hover:bg-white/10"
  }`;
}

export function NavLinks({ activeMenu, onMenuEnter }: NavLinksProps) {
  return (
    <nav className="flex items-center gap-1">
      <button
        type="button"
        className={navItemClass("services", activeMenu)}
        onMouseEnter={() => onMenuEnter("services")}
      >
        Services
      </button>

      <Link
        href="/work"
        className={navItemClass("work", activeMenu)}
        onMouseEnter={() => onMenuEnter(null)}
      >
        Our Work
      </Link>
      <Link
        href="/blog"
        className={navItemClass("insight", activeMenu)}
        onMouseEnter={() => onMenuEnter(null)}
      >
        Insight
      </Link>
      <Link
        href="/about"
        className={navItemClass("about", activeMenu)}
        onMouseEnter={() => onMenuEnter(null)}
      >
        About
      </Link>
      <Link
        href="/pricing"
        className={navItemClass("pricing", activeMenu)}
        onMouseEnter={() => onMenuEnter(null)}
      >
        Pricing
      </Link>
    </nav>
  );
}
