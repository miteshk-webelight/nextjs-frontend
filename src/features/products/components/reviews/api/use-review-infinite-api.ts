/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import type { ReviewsControllerGetReviewsByProductV1Params } from "@/api/generated/models";
import {
  getReviewsControllerGetReviewsByProductQueryKey,
  reviewsControllerGetReviewsByProduct,
} from "@/api/generated/reviews";
import { REVIEWS_LIMIT } from "@/features/products/components/reviews/constants/review.constants";
import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";

type UseReviewInfiniteApiParams = Omit<ReviewsControllerGetReviewsByProductV1Params, "page">;

export function useReviewInfiniteApi(params?: UseReviewInfiniteApiParams) {
  const { page: _page, ...stableParams } = (params ?? {}) as ReviewsControllerGetReviewsByProductV1Params;

  const queryKey = getReviewsControllerGetReviewsByProductQueryKey({
    ...stableParams,
    limit: stableParams.limit ?? REVIEWS_LIMIT,
  });

  return useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam }) =>
      reviewsControllerGetReviewsByProduct({
        ...params,
        page: pageParam,
        limit: params?.limit ?? REVIEWS_LIMIT,
      } as ReviewsControllerGetReviewsByProductV1Params),
    placeholderData: keepPreviousData,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.status !== 200) return undefined;

      const responseData = lastPage.data as unknown as { meta?: { hasNextPage?: boolean; page?: number } };
      const meta = responseData?.meta;

      if (!meta?.hasNextPage) return undefined;

      return (meta.page ?? 0) + 1;
    },
  });
}
