"use client";

import { formatPrice } from "@/lib/utils";

type ProductPriceProps = {
  price: number;
  discountPrice: number | null;
};

export function ProductPrice({ price, discountPrice }: Readonly<ProductPriceProps>) {
  if (discountPrice) {
    return (
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-foreground">{formatPrice(discountPrice)}</span>
        <span className="text-lg text-muted-foreground line-through">{formatPrice(price)}</span>
      </div>
    );
  }

  return (
    <div className="flex items-baseline gap-2">
      <span className="text-3xl font-bold text-foreground">{formatPrice(price)}</span>
    </div>
  );
}
