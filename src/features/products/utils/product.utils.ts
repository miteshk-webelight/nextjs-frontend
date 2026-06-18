import type { ProductPublicResponse } from "@/api/generated/models";
import type { Product } from "../types/product.types";
import { PLACEHOLDER_IMAGE } from "../constants/product.constants";

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

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  }).format(price);
}
