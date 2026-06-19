"use client";

import { useProductsControllerGetProductById } from "@/api/generated/products";

export function useProductDetailApi(id: string) {
  return useProductsControllerGetProductById(id, {
    query: {
      enabled: !!id,
    },
  });
}
