"use client";

import { DEFAULT_SORT_OPTION } from "@/features/products/constants/product.constants";
import type { ProductFiltersState } from "@/features/products/types/product.types";
import { useState } from "react";

export function useProductsFilters(initial?: Partial<ProductFiltersState>) {
  const [filters, setFilters] = useState<ProductFiltersState>({
    search: "",
    sortBy: DEFAULT_SORT_OPTION.sortBy,
    sortOrder: DEFAULT_SORT_OPTION.sortOrder,
    ...initial,
  });

  function setSearch(search: string) {
    setFilters((prev) => ({
      ...prev,
      search,
    }));
  }

  function setSorting(sortBy: string, sortOrder: "ASC" | "DESC") {
    setFilters((prev) => ({
      ...prev,
      sortBy,
      sortOrder,
    }));
  }

  return {
    search: filters.search,
    sortBy: filters.sortBy,
    sortOrder: filters.sortOrder,
    setSearch,
    setSorting,
  };
}
