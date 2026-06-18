"use client";

import { RotateCcw } from "lucide-react";
import { useProductsList } from "../hooks/use-products-list";
import { ProductGrid } from "./product-grid";
import { Button } from "@/components/ui/button";
import { ProductGridSkeleton } from "./product-grid-skeleton";

function ErrorState({ onRetry }: Readonly<{ onRetry: () => void }>) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center gap-4">
      <p className="text-sm text-muted-foreground">Failed to load products.</p>
      <Button variant="outline" size="sm" onClick={onRetry}>
        <RotateCcw className="size-4" />
        Retry
      </Button>
    </div>
  );
}

export function ProductsSection() {
  const { products, isLoading, isError } = useProductsList();

  if (isError) {
    return <ErrorState onRetry={() => window.location.reload()} />;
  }

  return (
    <section className="py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Products</h2>
        <p className="mt-1 text-sm text-muted-foreground">Discover our latest collection</p>
      </div>

      {isLoading ? <ProductGridSkeleton /> : <ProductGrid products={products} />}
    </section>
  );
}
