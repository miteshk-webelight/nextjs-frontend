"use client";

import { ReviewsControllerGetReviewsByProductV1ReviewSortBy } from "@/api/generated/models";
import type { ReviewSortEnum } from "@/features/products/components/reviews/types/review.types";
import { useState } from "react";

export function useReviewFilters() {
  const [sort, setSort] = useState<ReviewSortEnum>(ReviewsControllerGetReviewsByProductV1ReviewSortBy.NEWEST);
  const [rating, setRating] = useState<number | undefined>(undefined);

  return { sort, setSort, rating, setRating };
}
