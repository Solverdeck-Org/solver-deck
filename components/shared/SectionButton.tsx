import React from "react";

const SectionButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="backdrop-blur-2xl flex items-center gap-2 px-2 h-8 bg-neutral-950/20 ring ring-white/20 rounded-sm">
      <span className="text-sm font-outfit font-normal text-white/80">
        {children}
      </span>
    </div>
  );
};

export default SectionButton;
