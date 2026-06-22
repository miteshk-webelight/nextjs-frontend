"use client";

import type { ReviewsControllerGetReviewsByProductV1Params, ReviewsListResponse } from "@/api/generated/models";
import { getReviewsControllerGetReviewsByProductQueryKey } from "@/api/generated/reviews";
import { getProductReviews } from "@/features/products/components/reviews/api/reviews.api";
import { REVIEWS_LIMIT } from "@/features/products/components/reviews/constants/review.constants";
import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";

type UseReviewInfiniteApiParams = Omit<ReviewsControllerGetReviewsByProductV1Params, "page">;

export function useReviewInfiniteApi(params?: UseReviewInfiniteApiParams) {
  const stableParams = {
    ...params,
    limit: params?.limit ?? REVIEWS_LIMIT,
  };

  const queryKey = getReviewsControllerGetReviewsByProductQueryKey(stableParams);

  return useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam }) =>
      getProductReviews({
        ...stableParams,
        page: pageParam,
      }),
    placeholderData: keepPreviousData,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.status !== 200) return undefined;

      const responseData = lastPage.data as unknown as ReviewsListResponse;
      const meta = responseData?.meta;

      if (!meta?.hasNextPage) return undefined;

      return (meta.page ?? 0) + 1;
    },
  });
}
