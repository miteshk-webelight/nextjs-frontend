import { ProductDetailPage } from "@/features/products/components/detail/product-detail-page";

type PageProps = {
  params: Promise<{ productId: string }>;
};

const ProductDetail = async ({ params }: PageProps) => {
  const { productId } = await params;

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <ProductDetailPage productId={productId} />
    </div>
  );
};

export default ProductDetail;
