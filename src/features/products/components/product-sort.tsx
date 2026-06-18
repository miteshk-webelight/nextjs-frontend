"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PRODUCT_SORT_OPTIONS } from "@/features/products/constants/product.constants";
import { memo } from "react";

type ProductSortProps = {
  value: string;
  onValueChange: (value: string) => void;
};

export const ProductSort = memo(function ProductSort({ value, onValueChange }: ProductSortProps) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-full sm:w-50">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        {PRODUCT_SORT_OPTIONS.map((option) => (
          <SelectItem key={`${option.sortBy}-${option.sortOrder}`} value={`${option.sortBy}-${option.sortOrder}`}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
});
