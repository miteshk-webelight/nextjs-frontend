import { VALID_RATINGS } from "@/features/products/components/reviews/constants/review.constants";

export interface ProductDetailMedia {
  id: string;
  filePath: string;
}

export interface ProductDetailVendor {
  id: string;
  storeName: string;
}

export interface ProductDetail {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  price: number;
  discountPrice: number | null;
  media: ProductDetailMedia[];
  isOutOfStock: boolean;
  vendor: ProductDetailVendor | null;
  averageRating: number;
  reviewCount: number;
}

export interface ProductDetailState {
  product: ProductDetail | null;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => void;
}

export interface ReviewMedia {
  id: string;
  filePath: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  avatarUrl: string | null;
  rating: number;
  title: string;
  comment: string;
  likesCount: number;
  createdAt: string;
  media: ReviewMedia[];
}

export type RatingValue = (typeof VALID_RATINGS)[number];

export interface ReviewSummary {
  ratingDistribution: Record<RatingValue, number>;
}

export interface ProductReviewsState {
  reviews: Review[];
  summary: ReviewSummary | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => void;
}
