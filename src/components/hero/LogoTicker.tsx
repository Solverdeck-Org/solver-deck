import Image from "next/image";
import { tickerTools } from "./ticker-data";

export function LogoTicker() {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-30 bg-primary py-7 overflow-hidden flex items-center">
      <div className="flex items-center gap-16 whitespace-nowrap animate-ticker" style={{ width: "max-content" }}>
        {tickerTools.map((tool) => (
          <div key={tool.id} className="shrink-0 h-[21px] relative">
            <Image
              src={tool.src}
              alt={tool.id}
              width={100}
              height={100}
              style={{ height: "21px", width: "auto" }}
              className="object-contain brightness-0 invert"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}
