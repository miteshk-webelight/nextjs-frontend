"use client";

import { ProductPublicListResponse } from "@/api/generated/models";
import { useProductsApi } from "@/features/products/api/use-products";
import { PRODUCTS_LIMIT } from "@/features/products/constants/product.constants";
import type { UseProductsListParams, UseProductsListReturn } from "@/features/products/types/product.types";
import { mapProduct } from "@/features/products/utils/product.utils";

export function useProductsList(params: UseProductsListParams = {}): UseProductsListReturn {
  const { page = 1, limit = PRODUCTS_LIMIT, search, sortBy, sortOrder } = params;

  const query = useProductsApi({ page, limit, search, sortBy, sortOrder });

  const productsData = query.data?.status === 200 ? (query.data.data as unknown as ProductPublicListResponse) : null;

  const products = productsData?.data.map(mapProduct) ?? [];

  const totalPages = productsData?.meta.totalPages ?? 0;
  const total = productsData?.meta.total ?? 0;

  return {
    products,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError,
    error: query.error as Error | null,
    totalPages,
    total,
  };
}
