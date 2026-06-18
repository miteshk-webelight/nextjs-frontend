"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { PLACEHOLDER_IMAGE } from "@/features/products/constants/product.constants";
import type { Product } from "@/features/products/types/product.types";
import { formatPrice, getProductImageUrl } from "@/features/products/utils/product.utils";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: Readonly<ProductCardProps>) {
  const imageSrc = getProductImageUrl(product.imageUrl);

  return (
    <Card className="group flex flex-col overflow-hidden">
      <div className="relative aspect-square overflow-hidden bg-muted">
        {product.isOutOfStock && (
          <Badge variant="secondary" className="absolute top-3 left-3 z-10">
            Out of Stock
          </Badge>
        )}
        {product.imageUrl ? (
          <Image
            src={imageSrc}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="flex size-full items-center justify-center">
            <Image src={PLACEHOLDER_IMAGE} alt="" fill className="object-cover opacity-30" aria-hidden />
          </div>
        )}
      </div>

      <CardContent className="flex flex-1 flex-col gap-1.5 p-4">
        <p className="line-clamp-1 text-sm font-medium text-foreground">{product.name}</p>
        <p className="line-clamp-1 text-xs font-medium text-muted-foreground">{product.description}</p>
        <div className="flex items-center gap-2">
          {product.discountPrice ? (
            <>
              <span className="text-lg font-semibold text-foreground">{formatPrice(product.discountPrice)}</span>
              <span className="text-sm text-muted-foreground line-through">{formatPrice(product.price)}</span>
            </>
          ) : (
            <span className="text-lg font-semibold text-foreground">{formatPrice(product.price)}</span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
          size="sm"
          disabled={product.isOutOfStock}
          aria-label={product.isOutOfStock ? "Out of stock" : `Add ${product.name} to cart`}
        >
          <ShoppingCart className="size-4" />
          {product.isOutOfStock ? "Out of Stock" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  );
}
