"use client";

import type { ProductDetailVendor } from "@/features/products/components/detail/types";

type ProductVendorProps = {
  vendor: ProductDetailVendor | null;
};

export function ProductVendor({ vendor }: Readonly<ProductVendorProps>) {
  if (!vendor) return null;

  return (
    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
      <span>Sold by</span>
      <span className="font-medium text-foreground">{vendor.storeName}</span>
    </div>
  );
}
