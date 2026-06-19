"use client";

import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

type ProductQuantityProps = {
  min?: number;
  max?: number;
};

export function ProductQuantity({ min = 1, max = 99 }: Readonly<ProductQuantityProps>) {
  const [quantity, setQuantity] = useState(min);

  const decrement = () => setQuantity((prev) => Math.max(min, prev - 1));
  const increment = () => setQuantity((prev) => Math.min(max, prev + 1));

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium">Quantity</span>
      <div className="flex items-center gap-1">
        <Button
          variant="outline"
          size="icon"
          onClick={decrement}
          disabled={quantity <= min}
          aria-label="Decrease quantity"
        >
          <Minus className="size-4" />
        </Button>
        <span className="flex w-10 items-center justify-center text-sm font-medium tabular-nums" aria-live="polite">
          {quantity}
        </span>
        <Button
          variant="outline"
          size="icon"
          onClick={increment}
          disabled={quantity >= max}
          aria-label="Increase quantity"
        >
          <Plus className="size-4" />
        </Button>
      </div>
    </div>
  );
}
