import { ReviewsControllerGetReviewsByProductV1ReviewSortBy } from "@/api/generated/models";
import type { ReviewSortOption } from "@/features/products/components/reviews/types/review.types";

export const REVIEWS_LIMIT = 10;

export const VALID_RATINGS = [5, 4, 3, 2, 1] as const;

export const REVIEW_SORT_OPTIONS: ReviewSortOption[] = [
  { label: "Newest", value: ReviewsControllerGetReviewsByProductV1ReviewSortBy.NEWEST },
  { label: "Oldest", value: ReviewsControllerGetReviewsByProductV1ReviewSortBy.OLDEST },
  { label: "Highest Rating", value: ReviewsControllerGetReviewsByProductV1ReviewSortBy.HIGHEST_RATING },
  { label: "Lowest Rating", value: ReviewsControllerGetReviewsByProductV1ReviewSortBy.LOWEST_RATING },
  { label: "Most Liked", value: ReviewsControllerGetReviewsByProductV1ReviewSortBy.MOST_LIKED },
] as const;
