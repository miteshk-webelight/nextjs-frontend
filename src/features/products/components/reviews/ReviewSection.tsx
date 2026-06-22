"use client";

import { Separator } from "@/components/ui/separator";
import { useProductReviews } from "@/features/products/components/reviews/hooks/use-product-reviews";
import { useReviewFilters } from "@/features/products/components/reviews/hooks/use-review-sort";
import { ReviewContent } from "@/features/products/components/reviews/review-content";
import { ReviewSummary } from "@/features/products/components/reviews/review-summary";
import { ReviewSort } from "@/features/products/components/reviews/ReviewSort";

type ReviewSectionProps = {
  productId: string;
};

export function ReviewSection({ productId }: Readonly<ReviewSectionProps>) {
  const { sort, setSort, rating, setRating } = useReviewFilters();
  const {
    reviews,
    summary,
    totalReviews,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isError,
    error,
    refetch,
  } = useProductReviews({ productId, sort, rating });

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
              {isLoading ? "Loading..." : `${totalReviews} ${totalReviews === 1 ? "review" : "reviews"}`}
            </p>
            <ReviewSort value={sort} onChange={setSort} />
          </div>

          <Separator />

          <div className="w-full">
            <ReviewContent
              reviews={reviews}
              totalReviews={totalReviews}
              isLoading={isLoading}
              isError={isError}
              error={error}
              refetch={refetch}
              isFetchingNextPage={isFetchingNextPage}
              hasNextPage={hasNextPage}
              fetchNextPage={fetchNextPage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
