"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { REVIEW_SORT_OPTIONS } from "@/features/products/components/reviews/constants/review.constants";
import type { ReviewSortEnum } from "@/features/products/components/reviews/types/review.types";

type ReviewSortProps = {
  value: ReviewSortEnum;
  onChange: (value: ReviewSortEnum) => void;
};

export function ReviewSort({ value, onChange }: Readonly<ReviewSortProps>) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-44" aria-label="Sort reviews">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        {REVIEW_SORT_OPTIONS.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
