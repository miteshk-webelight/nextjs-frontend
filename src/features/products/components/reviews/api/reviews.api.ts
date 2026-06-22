import type { ReviewsControllerGetReviewsByProductV1Params } from "@/api/generated/models";
import { reviewsControllerGetReviewsByProduct } from "@/api/generated/reviews";

export async function getProductReviews(params: ReviewsControllerGetReviewsByProductV1Params) {
  return reviewsControllerGetReviewsByProduct(params);
}
