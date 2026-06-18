"use client";

import { DEFAULT_SORT_OPTION } from "@/features/products/constants/product.constants";
import type { ProductFiltersState } from "@/features/products/types/product.types";
import { useCallback, useState } from "react";

export function useProductsFilters(initial?: Partial<ProductFiltersState>) {
  const [filters, setFilters] = useState<ProductFiltersState>({
    search: "",
    sortBy: DEFAULT_SORT_OPTION.sortBy,
    sortOrder: DEFAULT_SORT_OPTION.sortOrder,
    ...initial,
  });

  const setSearch = useCallback((search: string) => {
    setFilters((prev) => ({ ...prev, search }));
  }, []);

  const setSorting = useCallback((sortBy: string, sortOrder: "ASC" | "DESC") => {
    setFilters((prev) => ({ ...prev, sortBy, sortOrder }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters({
      search: "",
      sortBy: DEFAULT_SORT_OPTION.sortBy,
      sortOrder: DEFAULT_SORT_OPTION.sortOrder,
      ...initial,
    });
  }, [initial]);

  return {
    search: filters.search,
    sortBy: filters.sortBy,
    sortOrder: filters.sortOrder,
    setSearch,
    setSorting,
    resetFilters,
  };
}
