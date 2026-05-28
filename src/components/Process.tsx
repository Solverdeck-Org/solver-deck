"use client";

import { phases } from "./process/types";

export function Process() {
  return (
    <section id="process" className="relative bg-white text-black w-full py-16 sm:py-24 border-t border-black/5">
      <div className="w-full px-5 sm:px-8 md:px-12 max-w-[1600px] mx-auto">
        <h2 className="text-2xl md:text-4xl lg:text-5xl tracking-widest uppercase text-black font-mono font-semibold mb-12 sm:mb-20 text-center">
          Our Proven 5-Phase Process
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 relative lg:pb-20">
          {phases.map((phase, index) => {
            const isOdd = index % 2 !== 0;
            const isLast = index === phases.length - 1;
            
            return (
              <div 
                key={phase.id} 
                className={`flex-1 relative z-10 flex flex-col gap-5 group bg-black/5 border border-black/10 p-6 rounded-2xl lg:bg-transparent lg:border-none lg:p-0 transition-transform ${isOdd ? 'lg:translate-y-20' : ''}`}
              >
                
                {/* Connecting curly line (only on desktop, and not for the last item) */}
                {!isLast && (
                  <svg 
                    aria-hidden="true"
                    className="hidden lg:block absolute left-[48px] w-[calc(100%+32px)] h-[80px] overflow-visible -z-10" 
                    style={{ top: '48px' }}
                    viewBox="0 0 100 100" 
                    preserveAspectRatio="none"
                  >
                    {isOdd ? (
                      <path d="M 0 0 C 40 0, 60 -100, 100 -100" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" className="text-black/15" />
                    ) : (
                      <path d="M 0 0 C 40 0, 60 100, 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" className="text-black/15" />
                    )}
                  </svg>
                )}

                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white border border-black/10 flex items-center justify-center shrink-0 mb-2 group-hover:border-primary/50 transition-colors mx-auto lg:mx-0 relative z-10 shadow-sm">
                  <span className="font-mono text-3xl font-bold text-primary">{phase.num}</span>
                </div>
                
                <h3 className="font-outfit font-medium text-xl sm:text-2xl text-black text-center lg:text-left">
                  {phase.title}
                </h3>
                
                <p className="text-black text-sm leading-relaxed text-center lg:text-left">
                  {phase.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
