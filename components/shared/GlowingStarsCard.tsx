import React from "react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsTitle,
  GlowingStarsDescription,
} from "../ui/glowing-stars";
import { number } from "framer-motion";

interface GlowingStarsCardProps {
  title: React.ReactNode;
  description: React.ReactNode;
  number: string;
  className?: string;
}

const GlowingStarsCard: React.FC<GlowingStarsCardProps> = ({
  title,
  description,
  number,
  className = "",
}) => {
  return (
    <div
      className={`flex items-center justify-center antialiased ${className}`}
    >
      <GlowingStarsBackgroundCard>
        <div className="flex mb-2">
          <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center mr-2">
            {number}
          </div>
          <GlowingStarsTitle>{title}</GlowingStarsTitle>
        </div>
        <GlowingStarsDescription className="flex items-end ml-10">{description}</GlowingStarsDescription>
      </GlowingStarsBackgroundCard>
    </div>
  );
};

export default GlowingStarsCard;
