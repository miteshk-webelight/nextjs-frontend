"use client";

import type { ReviewsControllerGetReviewsByProductV1Params, ReviewWithMediaResponse } from "@/api/generated/models";
import type { ReviewSummary } from "@/features/products/components/detail/types";
import { useReviewInfiniteApi } from "@/features/products/components/reviews/api/use-review-infinite-api";
import { REVIEWS_LIMIT } from "@/features/products/components/reviews/constants/review.constants";
import type { ReviewInfiniteState } from "@/features/products/components/reviews/types/review.types";
import { mapReview } from "@/features/products/utils/product-detail.mapper";
import { useMemo } from "react";

type UseProductReviewsParams = {
  productId: string;
  sort: ReviewsControllerGetReviewsByProductV1Params["reviewSortBy"];
  rating?: number;
};

export function useProductReviews({ productId, sort, rating }: UseProductReviewsParams): ReviewInfiniteState {
  const query = useReviewInfiniteApi({
    productId,
    reviewSortBy: sort,
    rating,
    limit: REVIEWS_LIMIT,
  });

  const reviewsData = useMemo(() => {
    if (!query.data?.pages) return [];

    return query.data.pages.flatMap((page) => {
      if (page.status !== 200) return [];

      const responseData = page.data as unknown as { data?: ReviewWithMediaResponse[] };
      return responseData?.data ?? [];
    });
  }, [query.data]);

  const reviews = useMemo(() => reviewsData.map(mapReview), [reviewsData]);

  const firstPage = query.data?.pages?.[0];
  const summary =
    firstPage?.status === 200 ? (firstPage.data as unknown as { summary?: ReviewSummary }).summary : undefined;

  return {
    reviews,
    summary,
    isLoading: query.isLoading,
    isFetchingNextPage: query.isFetchingNextPage,
    fetchNextPage: query.fetchNextPage,
    hasNextPage: query.hasNextPage ?? false,
    isError: query.isError,
    error: query.error as Error | null,
    refetch: query.refetch,
  };
}
