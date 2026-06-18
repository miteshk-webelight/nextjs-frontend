import { ProductCardSkeleton } from "./product-card-skeleton";

type ProductGridSkeletonProps = {
  count?: number;
};

export function ProductGridSkeleton({ count = 10 }: Readonly<ProductGridSkeletonProps>) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {Array.from({ length: count }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
}
