"use client";

import { Button } from "@/components/ui/button";
import type { Review } from "@/features/products/components/detail/types";
import { ReviewAvatar } from "@/features/products/components/reviews/review-avatar";
import { ReviewMedia } from "@/features/products/components/reviews/review-media";
import { ReviewRating } from "@/features/products/components/reviews/review-rating";
import { formatDate } from "@/lib/utils";
import { Heart } from "lucide-react";

type ReviewCardProps = {
  review: Review;
  onLike?: (reviewId: string) => void;
};

export function ReviewCard({ review, onLike }: Readonly<ReviewCardProps>) {
  return (
    <div className="flex gap-4 rounded-xl border p-4 w-full">
      <ReviewAvatar avatarUrl={review.avatarUrl} userName={review.userName} />

      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="flex flex-wrap items-center justify-between gap-y-1">
          <span className="text-sm font-medium text-foreground">{review.userName}</span>
          <span className="text-xs text-muted-foreground">{formatDate(review.createdAt)}</span>
        </div>

        <ReviewRating rating={review.rating} />

        {review.title && <h4 className="text-sm font-semibold text-foreground">{review.title}</h4>}
        {review.comment && <p className="text-sm leading-relaxed text-muted-foreground">{review.comment}</p>}

        <ReviewMedia media={review.media} />

        <div className="flex items-center gap-1 pt-1">
          <Button
            variant="ghost"
            size="sm"
            className="gap-1.5 text-muted-foreground hover:text-destructive"
            aria-label={`Like this review (${review.likesCount} likes)`}
            onClick={() => onLike?.(review.id)}
          >
            <Heart className="size-4" />
            <span className="text-xs">{review.likesCount}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
