"use client";

import { Button } from "@/components/ui/button";
import { InfiniteScrollTrigger } from "@/components/ui/infinite-scroll-trigger";
import { ReviewList } from "@/features/products/components/reviews/ReviewList";
import type { Review } from "@/features/products/components/detail/types";
import { Loader2, RotateCcw } from "lucide-react";

type ReviewContentProps = {
  reviews: Review[];
  totalReviews: number;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => void;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  fetchNextPage: () => Promise<unknown>;
};

export function ReviewContent({
  reviews,
  totalReviews,
  isLoading,
  isError,
  error,
  refetch,
  isFetchingNextPage,
  hasNextPage,
  fetchNextPage,
}: Readonly<ReviewContentProps>) {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-24 w-full">
        <Loader2 className="size-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (isError && totalReviews === 0) {
    return (
      <div className="flex flex-col items-center gap-3 py-12 w-full">
        <p className="text-sm text-muted-foreground">{error?.message ?? "Failed to load reviews."}</p>
        <Button variant="outline" size="sm" onClick={() => refetch()}>
          <RotateCcw className="mr-1.5 size-3.5" />
          Retry
        </Button>
      </div>
    );
  }

  if (totalReviews === 0) {
    return <p className="w-150 py-8 text-center text-sm text-muted-foreground max-sm:w-auto">No reviews yet.</p>;
  }

  return (
    <>
      <ReviewList reviews={reviews} />
      {isFetchingNextPage && (
        <div className="flex justify-center py-4 w-full">
          <Loader2 className="size-5 animate-spin text-muted-foreground" />
        </div>
      )}
      <InfiniteScrollTrigger enabled={hasNextPage} loading={isFetchingNextPage} onLoadMore={fetchNextPage} />
    </>
  );
}
