"use client";

import type { ProductPublicResponse } from "@/api/generated/models";
import { useProductsInfiniteApi } from "@/features/products/api/use-products-infinite";
import { PRODUCTS_LIMIT } from "@/features/products/constants/product.constants";
import type { UseProductsInfiniteListReturn, UseProductsListParams } from "@/features/products/types/product.types";
import { mapProduct } from "@/features/products/utils/product.utils";
import { useMemo } from "react";
export function useProductsInfiniteList(
  params: Omit<UseProductsListParams, "page"> = {},
): UseProductsInfiniteListReturn {
  const { search, sortBy, sortOrder } = params;

  const query = useProductsInfiniteApi({
    search: search?.trim(),
    sortBy,
    sortOrder,
    limit: params.limit ?? PRODUCTS_LIMIT,
  });

  const productsData = useMemo(() => {
    if (!query.data?.pages) return [];

    return query.data.pages.flatMap((page) => {
      if (page.status !== 200) return [];
      const productList = page.data;
      return (productList?.data as unknown as ProductPublicResponse) ?? [];
    });
  }, [query.data]);

  const products = productsData?.map(mapProduct) ?? [];

  return {
    products,
    isLoading: query.isLoading,
    isFetchingNextPage: query.isFetchingNextPage,
    fetchNextPage: query.fetchNextPage,
    hasNextPage: query.hasNextPage ?? false,
    isError: query.isError,
    error: query.error as Error | null,
  };
}
