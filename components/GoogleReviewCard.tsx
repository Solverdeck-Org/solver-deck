import { FcGoogle } from "react-icons/fc";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Link from "next/link";

interface GoogleReviewCardProps {
  rating?: number;
  totalReviews?: number;
}

const GoogleReviewCard = ({ rating = 0, totalReviews = 0 }: GoogleReviewCardProps) => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400 text-lg" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400 text-lg" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400 text-lg" />);
      }
    }
    return stars;
  };

  if (!rating) return null; // Don't show if no data

  return (
    <div className="flex items-center gap-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl w-fit min-w-[300px]">
      <div className="bg-white p-3 rounded-full shrink-0">
        <FcGoogle className="text-3xl" />
      </div>
      
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-white font-bold text-2xl">{rating.toFixed(1)}</span>
          <div className="flex gap-1">
            {renderStars(rating)}
          </div>
        </div>
        <p className="text-white/70 text-xs">Based on {totalReviews} reviews</p>
      </div>

      <div className="h-10 w-[1px] bg-white/20 mx-2"></div>

      <Link 
        href={`https://search.google.com/local/writereview?placeid=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID}`}
        target="_blank"
        className="text-blue-300 hover:text-blue-200 text-sm font-medium whitespace-nowrap underline underline-offset-2 transition-colors"
      >
        Give us a review
      </Link>
    </div>
  );
};

export default GoogleReviewCard;
