"use client";

import type { ReviewsControllerGetReviewsByProductV1Params, ReviewsListResponse } from "@/api/generated/models";
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

  const { reviews, summary, totalReviews } = useMemo(() => {
    if (!query.data?.pages) {
      return {
        reviews: [],
        summary: undefined,
        totalReviews: 0,
      };
    }

    const reviews = query.data.pages.flatMap((page) => {
      if (page.status !== 200) return [];

      return ((page.data as unknown as ReviewsListResponse).data ?? []).map(mapReview);
    });

    const firstPage = query.data.pages[0];

    if (firstPage?.status === 200) {
      const pageData = firstPage.data as unknown as ReviewsListResponse;

      return {
        reviews,
        summary: pageData.summary,
        totalReviews: pageData.meta?.total ?? 0,
      };
    }

    return {
      reviews,
      summary: undefined,
      totalReviews: 0,
    };
  }, [query.data]);

  return {
    reviews,
    summary,
    totalReviews,
    isLoading: query.isLoading,
    isFetchingNextPage: query.isFetchingNextPage,
    fetchNextPage: query.fetchNextPage,
    hasNextPage: query.hasNextPage ?? false,
    isError: query.isError,
    error: query.error as Error | null,
    refetch: query.refetch,
  };
}
