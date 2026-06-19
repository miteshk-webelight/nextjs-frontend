"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

type ProductActionsProps = {
  isOutOfStock: boolean;
  onAddToCart?: () => void;
};

export function ProductActions({ isOutOfStock, onAddToCart }: Readonly<ProductActionsProps>) {
  return (
    <div className="flex gap-3">
      <Button
        size="lg"
        className="flex-1"
        disabled={isOutOfStock}
        onClick={onAddToCart}
        aria-label={isOutOfStock ? "Out of stock" : "Add to cart"}
      >
        <ShoppingCart className="size-5" />
        {isOutOfStock ? "Out Of Stock" : "Add To Cart"}
      </Button>
    </div>
  );
}
