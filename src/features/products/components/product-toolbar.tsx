"use client";

import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import { memo } from "react";
import { ProductSearch } from "./product-search";
import { ProductSort } from "./product-sort";

type ProductToolbarProps = {
  search: string;
  onSearchChange: (value: string) => void;
  isSearching: boolean;
  sortValue: string;
  onSortChange: (value: string) => void;
  onReset: () => void;
};

export const ProductToolbar = memo(function ProductToolbar({
  search,
  onSearchChange,
  isSearching,
  sortValue,
  onSortChange,
  onReset,
}: ProductToolbarProps) {
  return (
    <div className="mb-6 w-full flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="w-full sm:max-w-sm">
        <ProductSearch value={search} onChange={onSearchChange} isSearching={isSearching} />
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" onClick={onReset}>
          <RotateCcw className="size-4" />
          Reset
        </Button>
        <ProductSort value={sortValue} onValueChange={onSortChange} />
      </div>
    </div>
  );
});
