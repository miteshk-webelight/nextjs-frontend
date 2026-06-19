/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import type { ProductPublicListResponse, ProductsControllerGetApprovedProductsV1Params } from "@/api/generated/models";
import {
  getProductsControllerGetApprovedProductsQueryKey,
  productsControllerGetApprovedProducts,
} from "@/api/generated/products";
import { PRODUCTS_LIMIT } from "@/features/products/constants/product.constants";
import { useInfiniteQuery } from "@tanstack/react-query";

type UseProductsInfiniteApiParams = Omit<ProductsControllerGetApprovedProductsV1Params, "page">;

export function useProductsInfiniteApi(params?: UseProductsInfiniteApiParams) {
  const { page: _page, ...stableParams } = (params ?? {}) as ProductsControllerGetApprovedProductsV1Params;

  const queryKey = getProductsControllerGetApprovedProductsQueryKey({
    ...stableParams,
    limit: stableParams.limit ?? PRODUCTS_LIMIT,
  });

  return useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam }) =>
      productsControllerGetApprovedProducts({
        ...params,
        page: pageParam,
        limit: params?.limit ?? PRODUCTS_LIMIT,
      } as ProductsControllerGetApprovedProductsV1Params),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.status !== 200) return undefined;

      const responseData = lastPage.data as unknown as ProductPublicListResponse;
      const meta = responseData?.meta;

      if (!meta?.hasNextPage) return undefined;

      return (meta.page ?? 0) + 1;
    },
  });
}
