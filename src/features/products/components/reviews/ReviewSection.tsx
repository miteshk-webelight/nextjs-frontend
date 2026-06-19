"use client";

import { Button } from "@/components/ui/button";
import { InfiniteScrollTrigger } from "@/components/ui/infinite-scroll-trigger";
import { Separator } from "@/components/ui/separator";
import { ReviewList } from "@/features/products/components/reviews/ReviewList";
import { ReviewSort } from "@/features/products/components/reviews/ReviewSort";
import { useProductReviews } from "@/features/products/components/reviews/hooks/use-product-reviews";
import { useReviewFilters } from "@/features/products/components/reviews/hooks/use-review-sort";
import { ReviewSummary } from "@/features/products/components/reviews/review-summary";
import { Loader2, RotateCcw } from "lucide-react";

type ReviewSectionProps = {
  productId: string;
};

export function ReviewSection({ productId }: Readonly<ReviewSectionProps>) {
  const { sort, setSort, rating, setRating } = useReviewFilters();
  const { reviews, summary, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage, isError, error, refetch } =
    useProductReviews({ productId, sort, rating });

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center py-24 w-full">
          <Loader2 className="size-6 animate-spin text-muted-foreground" />
        </div>
      );
    }

    if (isError && reviews.length === 0) {
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

    if (reviews.length === 0) {
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
  };

  return (
    <section aria-labelledby="reviews-heading" className="w-full">
      <h2 id="reviews-heading" className="mb-6 text-xl font-bold text-foreground">
        Reviews
      </h2>

      <div className="grid w-full gap-8 lg:grid-cols-[320px_1fr]">
        <div className="lg:sticky lg:top-4 lg:self-start w-full">
          {summary ? (
            <ReviewSummary summary={summary} selectedRating={rating} onRatingSelect={setRating} />
          ) : (
            <div className="h-68 rounded-xl border bg-muted/10 w-full" />
          )}
        </div>

        <div className="flex min-w-0 w-full flex-col gap-4">
          <div className="flex items-center justify-between w-full">
            <p className="shrink-0 text-sm text-muted-foreground">
              {isLoading ? "Loading..." : `${reviews.length} ${reviews.length === 1 ? "review" : "reviews"}`}
            </p>
            <ReviewSort value={sort} onChange={setSort} />
          </div>

          <Separator />

          <div className="w-full">{renderContent()}</div>
        </div>
      </div>
    </section>
  );
}
