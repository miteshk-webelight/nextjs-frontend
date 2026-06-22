import type { ProductPublicResponse, ReviewWithMediaResponse } from "@/api/generated/models";
import type {
  ProductDetail,
  ProductDetailMedia,
  ProductDetailVendor,
  Review,
  ReviewMedia,
} from "@/features/products/components/detail/types";

export function mapProductDetail(apiProduct: ProductPublicResponse): ProductDetail {
  const media: ProductDetailMedia[] = (apiProduct.media ?? []).slice(0, 5).map((m) => ({
    id: m.id,
    filePath: m.filePath,
  }));

  const vendor: ProductDetailVendor | null = apiProduct.vendor
    ? { id: apiProduct.vendor.id, storeName: apiProduct.vendor.storeName }
    : null;

  return {
    id: apiProduct.id,
    name: apiProduct.name,
    slug: apiProduct.slug,
    description: apiProduct.description,
    price: apiProduct.price,
    discountPrice: apiProduct.discountPrice,
    media,
    isOutOfStock: apiProduct.isOutOfStock,
    vendor,
    averageRating: apiProduct.averageRating ?? 0,
    reviewCount: apiProduct.reviewCount ?? 0,
  };
}

export function mapReview(apiReview: ReviewWithMediaResponse): Review {
  const media: ReviewMedia[] = (apiReview.media ?? []).map((m) => ({
    id: m.id,
    filePath: m.filePath,
  }));

  return {
    id: apiReview.id,
    userId: apiReview.user.id,
    userName: `${apiReview.user.fullName.slice(0, 12)}`,
    avatarUrl: apiReview.user.avatar,
    rating: apiReview.rating,
    title: apiReview.title,
    comment: apiReview.comment,
    likesCount: apiReview.likesCount,
    createdAt: apiReview.createdAt,
    media,
  };
}
