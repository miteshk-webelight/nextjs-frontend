import type { RatingValue } from "@/features/products/components/detail/types";
import { VALID_RATINGS } from "@/features/products/components/reviews/constants/review.constants";

/**
 * Calculates the total number of reviews from the rating distribution.
 */
export function calculateTotalReviews(ratingDistribution: Record<RatingValue, number>): number {
  return Object.values(ratingDistribution).reduce((total, count) => total + count, 0);
}

/**
 * Calculates the highest count of reviews assigned to a single star level.
 * Used to normalize progress bar percentage lengths safely.
 */
export function calculateMaxDistributionCount(ratingDistribution: Record<RatingValue, number>): number {
  return Math.max(...Object.values(ratingDistribution), 1);
}

/**
 * Calculates the weighted average rating from a distribution map, formatted to 1 decimal place.
 */
export function calculateAverageRating(ratingDistribution: Record<RatingValue, number>, totalReviews: number): string {
  if (totalReviews === 0) return "0.0";

  const totalWeightedScore = VALID_RATINGS.reduce((sum, star) => {
    return sum + star * (ratingDistribution[star] ?? 0);
  }, 0);

  return (totalWeightedScore / totalReviews).toFixed(1);
}
