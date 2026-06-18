import { ProductsControllerGetAllProductsV1SortOrder } from "@/api/generated/models";
import { ProductSortOption } from "@/features/products/types/product.types";

export const PRODUCTS_LIMIT = 10;

export const DEFAULT_PAGE = 1;

export const PLACEHOLDER_IMAGE = "/placeholder.svg";

export const GRID_BREAKPOINTS = {
  mobile: 1,
  tablet: 2,
  desktop: 4,
} as const;

export const PRODUCT_LIST_SORT_ORDER = ProductsControllerGetAllProductsV1SortOrder;

export type ProductSortOrder = (typeof PRODUCT_LIST_SORT_ORDER)[keyof typeof PRODUCT_LIST_SORT_ORDER];

export const PRODUCT_SORT_OPTIONS: ProductSortOption[] = [
  { label: "Newest", sortBy: "createdAt", sortOrder: PRODUCT_LIST_SORT_ORDER.DESC },
  { label: "Oldest", sortBy: "createdAt", sortOrder: PRODUCT_LIST_SORT_ORDER.ASC },
  { label: "Price: Low to High", sortBy: "price", sortOrder: PRODUCT_LIST_SORT_ORDER.ASC },
  { label: "Price: High to Low", sortBy: "price", sortOrder: PRODUCT_LIST_SORT_ORDER.DESC },
  { label: "Name: A to Z", sortBy: "name", sortOrder: PRODUCT_LIST_SORT_ORDER.ASC },
  { label: "Name: Z to A", sortBy: "name", sortOrder: PRODUCT_LIST_SORT_ORDER.DESC },
] as const;

export const DEFAULT_SORT_OPTION = PRODUCT_SORT_OPTIONS[0];
