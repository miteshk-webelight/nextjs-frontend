"use client";

import { Button } from "@/components/ui/button";
import { InfiniteScrollTrigger } from "@/components/ui/infinite-scroll-trigger";
import { ProductSortOrder } from "@/features/products/constants/product.constants";
import { useProductsFilters } from "@/features/products/hooks/use-products-filters";
import { useProductsInfiniteList } from "@/features/products/hooks/use-products-infinite-list";
import { useDebouncedValue } from "@/hooks/use-debounced-value";
import { Loader2, RotateCcw } from "lucide-react";
import { ProductGrid } from "./product-grid";
import { ProductGridSkeleton } from "./product-grid-skeleton";
import { ProductToolbar } from "./product-toolbar";

function ErrorState({ onRetry }: Readonly<{ onRetry: () => void }>) {
  return (
    <div className="flex min-h-75 flex-col items-center justify-center gap-4">
      <p className="text-sm text-muted-foreground">Failed to load products.</p>
      <Button variant="outline" size="sm" onClick={onRetry}>
        <RotateCcw className="size-4" />
        Retry
      </Button>
    </div>
  );
}

export function ProductsSection() {
  const { search, sortBy, sortOrder, setSearch, setSorting, resetFilters } = useProductsFilters();

  const debouncedSearch = useDebouncedValue(search);

  const { products, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage, isError } = useProductsInfiniteList({
    search: debouncedSearch,
    sortBy,
    sortOrder,
  });

  const isSearching = search !== debouncedSearch;

  const sortValue = `${sortBy}-${sortOrder}`;
  const handleSortChange = (value: string) => {
    const [newSortBy, newSortOrder] = value.split("-") as [string, ProductSortOrder];
    setSorting(newSortBy, newSortOrder);
  };

  if (isError && !products.length) {
    return <ErrorState onRetry={() => window.location.reload()} />;
  }

  return (
    <section className="py-8 w-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Products</h2>
        <p className="mt-1 text-sm text-muted-foreground">Discover our latest collection</p>
      </div>

      <ProductToolbar
        search={search}
        onSearchChange={setSearch}
        isSearching={isSearching}
        sortValue={sortValue}
        onSortChange={handleSortChange}
        onReset={resetFilters}
      />

      {isLoading ? (
        <ProductGridSkeleton />
      ) : (
        <>
          <ProductGrid products={products} />
          {isFetchingNextPage && (
            <div className="flex justify-center py-6">
              <Loader2 className="size-6 animate-spin text-muted-foreground" />
            </div>
          )}
          <InfiniteScrollTrigger enabled={hasNextPage} loading={isFetchingNextPage} onLoadMore={fetchNextPage} />
        </>
      )}
    </section>
  );
}
