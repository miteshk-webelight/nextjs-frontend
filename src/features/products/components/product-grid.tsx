import type { Product } from "@/features/products/types/product.types";
import { ProductCard } from "./product-card";

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: Readonly<ProductGridProps>) {
  if (products.length === 0) {
    return (
      <div className="flex min-h-50 items-center justify-center lg:w-257.5 md:w-125">
        <p className="text-sm text-muted-foreground">No products found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
