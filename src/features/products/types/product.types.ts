import { ProductSortOrder } from "@/features/products/constants/product.constants";

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  price: number;
  discountPrice: number | null;
  imageUrl: string | null;
  isOutOfStock: boolean;
}

export type UseProductsListParams = {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: ProductSortOrder;
  category?: string;
};

export type UseProductsListReturn = {
  products: Product[];
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  error: Error | null;
  totalPages: number;
  total: number;
};

export type ProductSortOption = {
  label: string;
  sortBy: string;
  sortOrder: ProductSortOrder;
};

export type ProductFiltersState = {
  search: string;
  sortBy: string;
  sortOrder: ProductSortOrder;
};

export type UseProductsInfiniteListReturn = {
  products: Product[];
  isLoading: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => Promise<unknown>;
  hasNextPage: boolean;
  isError: boolean;
  error: Error | null;
};
