"use client";

import { Progress } from "@/components/ui/progress";
import type { ReviewSummary as ReviewSummaryType } from "@/features/products/components/detail/types";
import { VALID_RATINGS } from "@/features/products/components/reviews/constants/review.constants";
import {
  calculateAverageRating,
  calculateMaxDistributionCount,
  calculateTotalReviews,
} from "@/features/products/components/reviews/utils/review.utils";
import { cn } from "@/lib/utils";
import { StarIcon, XIcon } from "lucide-react";

type ReviewSummaryProps = {
  summary: ReviewSummaryType;
  selectedRating?: number;
  onRatingSelect?: (rating: number | undefined) => void;
};

export function ReviewSummary({ summary, selectedRating, onRatingSelect }: Readonly<ReviewSummaryProps>) {
  const { ratingDistribution } = summary;

  const totalReviews = calculateTotalReviews(ratingDistribution);
  const maxCount = calculateMaxDistributionCount(ratingDistribution);
  const averageRating = calculateAverageRating(ratingDistribution, totalReviews);

  return (
    <div className="rounded-xl border bg-card p-6 max-h-72">
      <div className="mb-6 flex items-end gap-3">
        <div className="flex items-center gap-2">
          <span className="text-4xl font-bold tracking-tight">{averageRating}</span>
          <StarIcon className="size-6 fill-yellow-500 text-yellow-500" />
        </div>
        <span className="pb-1 text-sm text-muted-foreground">
          {totalReviews} {totalReviews === 1 ? "Review" : "Reviews"}
        </span>
      </div>

      <div className="space-y-2">
        {VALID_RATINGS.map((star) => (
          <RatingRow
            key={star}
            star={star}
            count={ratingDistribution[star] ?? 0}
            maxCount={maxCount}
            isActive={selectedRating === star}
            onSelect={onRatingSelect}
          />
        ))}
      </div>

      {selectedRating && onRatingSelect && (
        <button
          type="button"
          onClick={() => onRatingSelect(undefined)}
          className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-md py-1.5 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <XIcon className="size-3" />
          Clear filter
        </button>
      )}
    </div>
  );
}

type RatingRowProps = {
  star: number;
  count: number;
  maxCount: number;
  isActive: boolean;
  onSelect?: (rating: number | undefined) => void;
};

function RatingRow({ star, count, maxCount, isActive, onSelect }: Readonly<RatingRowProps>) {
  const percentage = (count / maxCount) * 100;
  const isInteractive = Boolean(onSelect);
  const Component = isInteractive ? "button" : "div";

  const ariaLabel = isInteractive
    ? `${star} star reviews. ${isActive ? "Filter active. Click to clear." : "Click to filter."}`
    : undefined;

  return (
    <Component
      type={isInteractive ? "button" : undefined}
      className={cn(
        "flex w-full items-center gap-3 text-left font-normal",
        isInteractive &&
          "cursor-pointer rounded-md px-1 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        isActive && "bg-muted",
      )}
      onClick={isInteractive ? () => onSelect?.(isActive ? undefined : star) : undefined}
      aria-label={ariaLabel}
      aria-pressed={isInteractive ? isActive : undefined}
    >
      <div className="flex w-10 items-center justify-end gap-1 text-sm font-medium">
        <span>{star}</span>
        <StarIcon className="size-3.5 fill-yellow-500 text-yellow-500" />
      </div>

      <Progress
        value={percentage}
        className={cn("h-2.5 flex-1 pointer-events-none", isActive && "ring-2 ring-yellow-500/50")}
        aria-label={`${star} star reviews: ${count}`}
      />

      <span className="w-8 text-right text-sm tabular-nums text-muted-foreground">{count}</span>
    </Component>
  );
}
