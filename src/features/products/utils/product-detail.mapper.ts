import type { ProductPublicResponse } from "@/api/generated/models";
import type {
  ProductDetail,
  ProductDetailMedia,
  ProductDetailVendor,
} from "@/features/products/components/detail/types";

export function mapProductDetail(apiProduct: ProductPublicResponse): ProductDetail {
  const extended = apiProduct;

  const media: ProductDetailMedia[] = (apiProduct.media ?? []).slice(0, 5).map((m) => ({
    id: m.id,
    filePath: m.filePath,
  }));

  const vendor: ProductDetailVendor | null = extended.vendor
    ? { id: extended.vendor.id, storeName: extended.vendor.storeName }
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
    averageRating: extended.averageRating ?? 0,
    reviewCount: extended.reviewCount ?? 0,
  };
}
