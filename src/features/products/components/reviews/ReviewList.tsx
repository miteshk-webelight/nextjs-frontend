import type { Review } from "@/features/products/components/detail/types";
import { ReviewCard } from "@/features/products/components/reviews/review-card";

type ReviewListProps = {
  reviews: Review[];
};

export function ReviewList({ reviews }: Readonly<ReviewListProps>) {
  return (
    <div className="flex flex-col gap-4">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}
