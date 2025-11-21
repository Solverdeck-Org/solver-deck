"use client";

import { cn } from "@/lib/utils";
import { FaGoogle, FaStar, FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";

interface Review {
  name: string;
  relativePublishTimeDescription: string;
  rating: number;
  text: {
    text: string;
    languageCode: string;
  };
  originalText: {
    text: string;
    languageCode: string;
  };
  authorAttribution: {
    displayName: string;
    uri: string;
    photoUri: string;
  };
  publishTime: string;
}

const ReviewCard = ({
  img,
  name,
  body,
  rating,
}: {
  img?: string;
  name: string;
  body: string;
  rating: number;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-80 shrink-0 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-white/10 bg-white/5 hover:bg-white/10 transition-colors",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {img ? (
          <img 
            className="rounded-full object-cover" 
            width="32" 
            height="32" 
            alt={name} 
            src={img} 
            referrerPolicy="no-referrer"
          />
        ) : (
          <FaUserCircle className="text-white/50 text-3xl" />
        )}
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <div className="flex items-center gap-1">
             <div className="flex">
                {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={cn("text-[10px]", i < rating ? "text-yellow-400" : "text-gray-600")} />
                ))}
             </div>
          </div>
        </div>
        <div className="ml-auto">
            <FaGoogle className="text-white/50" />
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white/80 line-clamp-4">{body}</blockquote>
    </figure>
  );
};

const GoogleReviewsMarquee = ({ reviews = [] }: { reviews?: Review[] }) => {
  if (!reviews || reviews.length === 0) return null;

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10 bg-black">
      <div className="flex w-full overflow-hidden">
        <motion.div
          className="flex gap-4 pr-4"
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40, // Adjust speed here
          }}
          style={{ width: "max-content" }}
        >
          {/* First copy of reviews */}
          <div className="flex gap-4">
            {reviews.map((review, i) => (
              <ReviewCard 
                key={`1-${i}`} 
                img={review.authorAttribution.photoUri}
                name={review.authorAttribution.displayName}
                body={review.text?.text || review.originalText?.text || ""}
                rating={review.rating}
              />
            ))}
          </div>
          {/* Second copy of reviews for seamless loop */}
          <div className="flex gap-4">
            {reviews.map((review, i) => (
              <ReviewCard 
                key={`2-${i}`} 
                img={review.authorAttribution.photoUri}
                name={review.authorAttribution.displayName}
                body={review.text?.text || review.originalText?.text || ""}
                rating={review.rating}
              />
            ))}
          </div>
        </motion.div>
      </div>
      
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black to-transparent z-10"></div>
    </div>
  );
};

export default GoogleReviewsMarquee;
