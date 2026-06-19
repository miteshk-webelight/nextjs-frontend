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
