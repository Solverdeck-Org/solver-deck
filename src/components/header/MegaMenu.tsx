import Link from "next/link";
import { Button } from "@/components/ui/button";
import { type MenuData } from "./menus";

interface MegaMenuProps {
  activeMenu: string;
  menuData: MenuData;
  onMouseEnter: () => void;
}

export function MegaMenu({ menuData, onMouseEnter }: MegaMenuProps) {
  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: megamenu wrapper requires pointer tracking
    <div
      className="absolute top-full left-0 right-0 w-full bg-black text-white py-16 flex justify-center shadow-2xl"
      onMouseEnter={onMouseEnter}
    >
      <div className="max-w-6xl px-8 w-full flex justify-between items-start gap-24">
        <div className="flex gap-24 flex-1">
          {menuData.columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-5">
              {col.title && (
                <h3 className="text-[11px] text-[#8a8a8a] tracking-widest font-medium uppercase">{col.title}</h3>
              )}
              <ul className="flex flex-col gap-4">
                {col.items.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-3xl font-outfit font-normal text-white hover:text-white/70 transition-colors flex items-center gap-3">
                      {item.name}
                      {item.name.includes("Agent") && (
                        <span className="text-[10px] bg-white text-black px-1.5 py-0.5 rounded-full font-bold uppercase tracking-tighter">NEW</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="w-[500px] aspect-video bg-[#0a0a0a] p-10 relative overflow-hidden group cursor-pointer border border-white/5 flex flex-col justify-between">
          <h2 className="text-3xl font-outfit mb-3 text-white relative z-10 leading-tight font-medium">
            The only AI operating system<br />your business needs
          </h2>
          <div className="relative z-10">
            <Button className="bg-white text-black hover:bg-white/90 rounded-full font-bold text-xs px-6 py-5">
              Start Your AI Transformation
            </Button>
          </div>
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
}
