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
  onClick,
  className = "",
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col bg-white/5 w-70 h-[540px] md:w-90 md:h-[500px] ring ring-white/20 rounded-2xl pb-6 space-y-4 shadow-lg hover:shadow-xl transition-shadow ${className}`}
    >
      <div className="relative h-[70%] md:h-[80%] w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="h-full w-full object-cover"
        />
      </div>
      <div className="h-[30%] md:h-[20%] px-6">
        <h3 className="text-xl font-semibold text-white pb-2">{title}</h3>
        <p className="text-gray-300 flex-grow">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
