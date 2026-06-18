import type { ProductsControllerGetApprovedProductsV1Params } from "@/api/generated/models";
import { useProductsControllerGetApprovedProducts } from "@/api/generated/products";
import { keepPreviousData } from "@tanstack/react-query";

export type UseProductsApiParams = ProductsControllerGetApprovedProductsV1Params;

export function useProductsApi(params?: UseProductsApiParams) {
  return useProductsControllerGetApprovedProducts(params, {
    query: {
      placeholderData: keepPreviousData,
    },
  });
}
