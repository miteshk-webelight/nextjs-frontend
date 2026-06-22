import type { ReviewsControllerGetReviewsByProductV1ReviewSortBy } from "@/api/generated/models";
import type { Review, ReviewSummary } from "@/features/products/components/detail/types";

export type ReviewSortEnum = ReviewsControllerGetReviewsByProductV1ReviewSortBy;

export type ReviewSortOption = {
  label: string;
  value: ReviewSortEnum;
};

export type ReviewInfiniteState = {
  reviews: Review[];
  summary: ReviewSummary | undefined;
  totalReviews: number;
  isLoading: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => Promise<unknown>;
  hasNextPage: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => void;
};
