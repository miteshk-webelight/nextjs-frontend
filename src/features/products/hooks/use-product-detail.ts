"use client";

import { ProductPublicResponse } from "@/api/generated/models";
import { useProductDetailApi } from "@/features/products/api/use-product-detail-api";
import type { ProductDetailState } from "@/features/products/components/detail/types";
import { mapProductDetail } from "@/features/products/utils/product-detail.mapper";

export function useProductDetail(id: string): ProductDetailState {
  const query = useProductDetailApi(id);

  const product =
    query.data?.status === 200 && query.data.data
      ? mapProductDetail(query.data.data as unknown as ProductPublicResponse)
      : null;

  return {
    product,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error as Error | null,
    refetch: query.refetch,
  };
}
