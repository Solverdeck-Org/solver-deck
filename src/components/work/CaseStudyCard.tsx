"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ExternalLink, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import type { SanityCaseStudy } from "@/components/CaseStudies";
import { portableTextComponents } from "@/components/blog/BlogPostBody";

interface CaseStudyCardProps {
  study: SanityCaseStudy;
}

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsModalOpen(false);
  };

  return (
    <>
      <button 
        type="button"
        onClick={handleCardClick}
        className="group relative bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden flex flex-col p-5 shadow-2xl transition-all duration-300 hover:border-white/20 hover:bg-[#0f0f0f] aspect-[16/12] justify-between cursor-pointer text-left w-full"
      >
        <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-black border border-white/5 flex items-center justify-center shrink-0">
          {study.imageUrl ? (
            <Image src={study.imageUrl} alt={study.name ?? ""} fill className="object-cover" />
          ) : (
            <div className="absolute inset-0 bg-[#060606]" />
          )}
        </div>
        <div className="flex flex-col flex-1 justify-between mt-4">
          <div className="flex flex-col gap-1.5">
            <span className="text-white font-medium text-lg font-outfit tracking-tight">
              {study.name}
            </span>
            <p className="text-xs text-white/70 leading-relaxed font-light font-outfit line-clamp-2">{study.description}</p>
          </div>
        </div>
      </button>

      {mounted && isModalOpen && typeof document !== "undefined" && createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <button 
            type="button"
            aria-label="Close modal"
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity cursor-default w-full h-full border-0 p-0"
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <div className="relative bg-[#111] border border-white/10 rounded-2xl w-full max-w-4xl max-h-full overflow-hidden flex flex-col shadow-2xl shadow-black/50 z-10 animate-in fade-in zoom-in-95 duration-300">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0">
              <h2 className="text-2xl md:text-3xl font-outfit font-medium text-white tracking-tight">{study.name}</h2>
              <button 
                type="button"
                onClick={closeModal}
                className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white/70 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              {study.imageUrl && (
                <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-8 border border-white/5 bg-black">
                  <Image src={study.imageUrl} alt={study.name ?? ""} fill className="object-cover" />
                </div>
              )}
              
              <div className="w-full">
                {study.body ? (
                  <PortableText value={study.body as any} components={portableTextComponents as any} />
                ) : (
                  <p className="text-white/80 leading-relaxed text-base font-outfit mb-5">{study.description}</p>
                )}
              </div>
            </div>
            
            {/* Footer */}
            {study.link && (
              <div className="p-6 border-t border-white/10 shrink-0 flex justify-end bg-black/50">
                <Link 
                  href={study.link} 
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-primary text-white hover:bg-primary/90 px-6 py-3 rounded-full font-medium transition-colors text-sm uppercase tracking-wider font-mono"
                >
                  Visit Project <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
