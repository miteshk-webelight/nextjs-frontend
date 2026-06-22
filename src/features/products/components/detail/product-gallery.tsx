"use client";

import { ProductGalleryThumbnail } from "@/features/products/components/detail/product-gallery-thumbnail";
import type { ProductDetailMedia } from "@/features/products/components/detail/types";
import { PLACEHOLDER_IMAGE } from "@/features/products/constants/product.constants";
import Image from "next/image";
import { useState } from "react";

type ProductGalleryProps = {
  media: ProductDetailMedia[];
  productName: string;
};

export function ProductGallery({ media, productName }: Readonly<ProductGalleryProps>) {
  const [activeIndex, setActiveIndex] = useState(0);

  const hasMedia = media.length > 0;
  const images = hasMedia ? media : [{ id: "placeholder", filePath: PLACEHOLDER_IMAGE }];
  const safeIndex = Math.min(activeIndex, images.length - 1);
  const activeImage = images[safeIndex];

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-muted">
        <Image
          src={activeImage.filePath}
          alt={hasMedia ? `${productName} - Image ${safeIndex + 1}` : productName}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
          priority
        />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Product images">
        {images.map((img, index) => (
          <ProductGalleryThumbnail
            key={img.id}
            src={img.filePath}
            alt={`${productName} thumbnail ${index + 1}`}
            isActive={index === safeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
