"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { useState } from "react";
import { type MenuData, menus } from "./menus";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  caseStudiesMenu: MenuData;
}

interface NavItem {
  label: string;
  href?: string;
  menuKey?: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Services", href: "/#services" },
  { label: "Our Work", href: "/work" },
  { label: "Insight", menuKey: "insight" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export function MobileMenu({
  open,
  onClose,
  caseStudiesMenu,
}: MobileMenuProps) {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  const getMenuData = (key: string): MenuData | null => {
    if (key === "caseStudies") return caseStudiesMenu;
    return menus[key] ?? null;
  };

  const submenuData = activeSubmenu ? getMenuData(activeSubmenu) : null;
  const submenuLabel = activeSubmenu
    ? (NAV_ITEMS.find((item) => item.menuKey === activeSubmenu)?.label ?? "")
    : "";

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 top-[72px] bottom-0 z-40 bg-black flex flex-col">
      {/* Submenu header — only shows when inside a submenu */}
      {activeSubmenu && (
        <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10">
          <button
            type="button"
            onClick={() => setActiveSubmenu(null)}
            className="flex items-center gap-2 text-white"
            aria-label="Back"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <span className="text-white text-[11px] font-mono uppercase tracking-widest">
            {submenuLabel}
          </span>
        </div>
      )}

      {/* Content */}
      <nav className="flex-1 overflow-y-auto px-6 py-8">
        {activeSubmenu && submenuData ? (
          <div className="flex flex-col gap-8">
            {submenuData.columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-4">
                <span className="text-[10px] font-mono text-white/50 tracking-widest uppercase">
                  {col.title}
                </span>
                <ul className="flex flex-col gap-4">
                  {col.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => {
                          setActiveSubmenu(null);
                          onClose();
                        }}
                        className="text-2xl font-outfit font-medium text-white hover:text-white/70 transition"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <ul className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const isCurrentPage = item.href ? (pathname === item.href || (item.href !== "/" && !item.href.startsWith("/#") && pathname.startsWith(item.href))) : false;
              
              return (
              <li key={item.label}>
                {item.menuKey ? (
                  <button
                    type="button"
                    onClick={() => setActiveSubmenu(item.menuKey!)}
                    className="w-full flex items-center justify-between py-3 text-2xl font-outfit font-medium text-white"
                  >
                    {item.label}
                    <svg
                      className="w-5 h-5 text-white/40"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href!}
                    onClick={() => {
                      setActiveSubmenu(null);
                      onClose();
                    }}
                    className={`block py-3 text-2xl font-outfit font-medium transition-colors ${isCurrentPage ? "text-primary" : "text-white"}`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
              );
            })}
          </ul>
        )}
      </nav>

      {/* Bottom buttons */}
      <div className="px-6 pb-8 pt-4 flex gap-3 border-t border-white/10">
        <Link
          href="tel:+442038363442"
          onClick={onClose}
          className="flex-1 bg-primary text-white text-sm font-semibold tracking-widest text-center py-4 rounded-full transition hover:bg-primary/90 inline-flex items-center justify-center gap-2"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          <span>020 3836 3442</span>
        </Link>
        <Link
          href="/contact"
          onClick={onClose}
          className="flex-1 border border-white/20 text-white text-sm font-semibold uppercase tracking-widest text-center py-4 rounded-full transition hover:bg-white/10"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
