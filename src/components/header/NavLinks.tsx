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
        className={navItemClass("products", activeMenu)}
        onMouseEnter={() => onMenuEnter("products")}
      >
        Products
      </button>
      <Link
        href="/#services"
        className={navItemClass("services", activeMenu)}
        onMouseEnter={() => onMenuEnter(null)}
      >
        Services
      </Link>
      <Link
        href="/work"
        className={navItemClass("work", activeMenu)}
        onMouseEnter={() => onMenuEnter(null)}
      >
        Case Studies
      </Link>
      <button
        type="button"
        className={navItemClass("resources", activeMenu)}
        onMouseEnter={() => onMenuEnter("resources")}
      >
        Resources
      </button>
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
