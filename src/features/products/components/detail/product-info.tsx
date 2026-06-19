"use client";

import type { ProductDetail } from "@/features/products/components/detail/types";
import { ProductActions } from "@/features/products/components/detail/product-actions";
import { ProductDescription } from "@/features/products/components/detail/product-description";
import { ProductPrice } from "@/features/products/components/detail/product-price";
import { ProductQuantity } from "@/features/products/components/detail/product-quantity";
import { ProductRating } from "@/features/products/components/detail/product-rating";
import { ProductVendor } from "@/features/products/components/detail/product-vendor";

type ProductInfoProps = {
  product: ProductDetail;
};

export function ProductInfo({ product }: Readonly<ProductInfoProps>) {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">{product.name}</h1>

      <ProductRating averageRating={product.averageRating} reviewCount={product.reviewCount} />

      <ProductVendor vendor={product.vendor} />

      <ProductPrice price={product.price} discountPrice={product.discountPrice} />

      <ProductDescription description={product.description} />

      <ProductQuantity />

      <ProductActions isOutOfStock={product.isOutOfStock} />
    </div>
  );
}
