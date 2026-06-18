import { ProductSortOption } from "@/features/products/types/product.types";

export const PRODUCTS_LIMIT = 10;

export const DEFAULT_PAGE = 1;

export const PLACEHOLDER_IMAGE = "/placeholder.svg";

export const GRID_BREAKPOINTS = {
  mobile: 1,
  tablet: 2,
  desktop: 4,
} as const;

export const PRODUCT_SORT_OPTIONS: ProductSortOption[] = [
  { label: "Newest", sortBy: "createdAt", sortOrder: "DESC" },
  { label: "Oldest", sortBy: "createdAt", sortOrder: "ASC" },
  { label: "Price: Low to High", sortBy: "price", sortOrder: "ASC" },
  { label: "Price: High to Low", sortBy: "price", sortOrder: "DESC" },
  { label: "Name: A to Z", sortBy: "name", sortOrder: "ASC" },
  { label: "Name: Z to A", sortBy: "name", sortOrder: "DESC" },
] as const;

export const DEFAULT_SORT_OPTION = PRODUCT_SORT_OPTIONS[0];
