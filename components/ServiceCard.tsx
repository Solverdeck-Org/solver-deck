import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import React from "react";

export interface ServiceCardProps {
  /** URL of the image or icon to display */
  imageSrc: string;
  /** Alt text for the image */
  imageAlt?: string;
  /** Card title */
  title: React.ReactNode;
  /** Card description */
  description: React.ReactNode;
  /** List of sub-services/features */
  features?: string[];
  /** Optional click handler */
  onClick?: () => void;
  /** Additional wrapper classes */
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  imageAlt = "",
  title,
  description,
  features = [],
  onClick,
  className = "",
}) => {
  return (
    <div
      onClick={onClick}
      className={`group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg transition-all hover:border-white/20 hover:bg-white/10 hover:shadow-xl ${className}`}
    >
      <div className="relative h-48 w-full overflow-hidden md:h-56">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] to-transparent opacity-60" />
      </div>

      <div className="flex flex-grow flex-col p-6">
        <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
        <p className="mb-6 text-sm leading-relaxed text-gray-300/90">
          {description}
        </p>

        {features && features.length > 0 && (
          <div className="mt-auto space-y-3 border-t border-white/10 pt-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-500" />
                <span className="text-sm font-medium text-gray-200">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
