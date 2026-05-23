import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { SanityCaseStudy } from "@/components/CaseStudies";

interface CaseStudyCardProps {
  study: SanityCaseStudy;
}

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <div className="group relative bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden flex flex-col p-5 shadow-2xl transition-all duration-300 hover:border-white/20 hover:bg-[#0f0f0f] aspect-16/12 justify-between">
      <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-black border border-white/5 flex items-center justify-center shrink-0">
        {study.imageUrl ? (
          <Image src={study.imageUrl} alt={study.name ?? ""} fill className="object-cover" />
        ) : (
          <div className="absolute inset-0 bg-[#060606]" />
        )}
        {study.link && (
          <Link href={study.link} className="absolute top-3 right-3 p-1.5 rounded-full bg-black/80 border border-white/10 text-white/50 opacity-0 group-hover:opacity-100 group-hover:text-white transition-all duration-300 z-20">
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
      <div className="flex flex-col flex-1 justify-between mt-4">
        <div className="flex flex-col gap-1.5">
          <span className="text-white font-medium text-lg font-outfit tracking-tight">
            {study.name}
          </span>
          <p className="text-xs text-white leading-relaxed font-light font-outfit line-clamp-2">{study.description}</p>
        </div>
      </div>
    </div>
  );
}
