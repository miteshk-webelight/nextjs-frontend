"use client";

import { ProductPublicResponse } from "@/api/generated/models";
import { useProductsControllerGetProductById } from "@/api/generated/products";
import type { ProductDetailState } from "@/features/products/components/detail/types";
import { mapProductDetail } from "@/features/products/utils/product-detail.mapper";
import { getApiErrorMessage } from "@/lib/get-error-message";

export function useProductDetailApi(id: string) {
  return useProductsControllerGetProductById(id, {
    query: {
      enabled: !!id,
    },
  });
}

export function useProductDetail(id: string): ProductDetailState {
  const query = useProductDetailApi(id);

  const product =
    query.data?.status === 200 && query.data.data
      ? mapProductDetail(query.data.data as unknown as ProductPublicResponse)
      : null;

  const errorMessage = getApiErrorMessage(query.error);

  return {
    product,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error as Error | null,
    errorMessage,
    refetch: query.refetch,
  };
}
