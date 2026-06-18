"use client";

import { memo } from "react";
import { ProductSearch } from "./product-search";
import { ProductSort } from "./product-sort";

type ProductToolbarProps = {
  search: string;
  onSearchChange: (value: string) => void;
  isSearching: boolean;
  sortValue: string;
  onSortChange: (value: string) => void;
};

export const ProductToolbar = memo(function ProductToolbar({
  search,
  onSearchChange,
  isSearching,
  sortValue,
  onSortChange,
}: ProductToolbarProps) {
  return (
    <div className="mb-6 w-full flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="w-full sm:max-w-sm">
        <ProductSearch value={search} onChange={onSearchChange} isSearching={isSearching} />
      </div>
      <ProductSort value={sortValue} onValueChange={onSortChange} />
    </div>
  );
});
