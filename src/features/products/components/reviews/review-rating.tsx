import { VALID_RATINGS } from "@/features/products/components/reviews/constants/review.constants";
import { StarIcon } from "lucide-react";

type ReviewRatingProps = {
  rating: number;
};

export function ReviewRating({ rating }: Readonly<ReviewRatingProps>) {
  const totalStars = VALID_RATINGS.length;

  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of ${totalStars} stars`}>
      {Array.from({ length: totalStars }, (_, index) => {
        const isFilled = index < rating;

        return (
          <StarIcon
            key={index}
            className={`size-4 ${isFilled ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground"}`}
          />
        );
      })}
    </div>
  );
}
