"use client";

import { useProductsApi } from "../api/use-products";
import { mapProduct } from "../utils/product.utils";
import type { UseProductsListParams, UseProductsListReturn } from "../types/product.types";
import { PRODUCTS_LIMIT } from "../constants/product.constants";
import { ProductPublicListResponse } from "@/api/generated/models";

export function useProductsList(params: UseProductsListParams = {}): UseProductsListReturn {
  const { page = 1, limit = PRODUCTS_LIMIT } = params;

  const query = useProductsApi({ page, limit });

  const productsData = query.data?.status === 200 ? (query.data.data as unknown as ProductPublicListResponse) : null;

  const products = productsData?.data.map(mapProduct) ?? [];

  const totalPages = productsData?.meta.totalPages ?? 0;
  const total = productsData?.meta.total ?? 0;

  return {
    products,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error as Error | null,
    totalPages,
    total,
  };
}
