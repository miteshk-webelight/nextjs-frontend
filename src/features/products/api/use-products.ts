import { useProductsControllerGetApprovedProducts } from "@/api/generated/products";
import type { ProductsControllerGetApprovedProductsV1Params } from "@/api/generated/models";

export type UseProductsApiParams = ProductsControllerGetApprovedProductsV1Params;

export function useProductsApi(params?: UseProductsApiParams) {
  return useProductsControllerGetApprovedProducts(params);
}
