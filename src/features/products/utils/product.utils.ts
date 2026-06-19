import type { ProductPublicResponse } from "@/api/generated/models";
import { PLACEHOLDER_IMAGE } from "@/features/products/constants/product.constants";
import type { Product } from "@/features/products/types/product.types";

export function mapProduct(apiProduct: ProductPublicResponse): Product {
  return {
    id: apiProduct.id,
    name: apiProduct.name,
    slug: apiProduct.slug,
    description: apiProduct.description,
    price: apiProduct.price,
    discountPrice: apiProduct.discountPrice,
    imageUrl: apiProduct.media.length > 0 ? `${apiProduct.media[0].filePath}` : null,
    isOutOfStock: apiProduct.isOutOfStock,
  };
}

export function getProductImageUrl(imageUrl: string | null): string {
  return imageUrl ?? PLACEHOLDER_IMAGE;
}
