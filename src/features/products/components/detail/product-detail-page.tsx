"use client";

import { Separator } from "@/components/ui/separator";
import { ErrorState } from "@/features/products/components/detail/error-state";
import { ProductDetailSkeleton } from "@/features/products/components/detail/product-detail-skeleton";
import { ProductGallery } from "@/features/products/components/detail/product-gallery";
import { ProductInfo } from "@/features/products/components/detail/product-info";
import { ReviewSection } from "@/features/products/components/reviews/ReviewSection";
import { useProductDetail } from "@/features/products/hooks/use-product-detail";

type ProductDetailPageProps = {
  productId: string;
};

export function ProductDetailPage({ productId }: Readonly<ProductDetailPageProps>) {
  const { product, isLoading, isError, error, refetch } = useProductDetail(productId);

  if (isLoading) {
    return <ProductDetailSkeleton />;
  }

  if (isError) {
    return <ErrorState message={error?.message} onRetry={refetch} />;
  }

  if (!product) {
    return <ErrorState message="Product not found." />;
  }

  return (
    <div className="mx-auto lg:w-230 max-w-7xl flex flex-col gap-12 px-4 sm:px-6 lg:px-8 w-auto">
      <div className="grid gap-10 md:grid-cols-2 max-sm:w-auto">
        <ProductGallery media={product.media} productName={product.name} />
        <ProductInfo product={product} />
      </div>

      <Separator />

      <ReviewSection productId={productId} />
    </div>
  );
}
