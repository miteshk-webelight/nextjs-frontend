"use client";

import type { ReviewMedia as ReviewMediaType } from "@/features/products/components/detail/types";
import { ReviewImageModal } from "@/features/products/components/reviews/review-image-modal";
import Image from "next/image";
import { useState } from "react";

type ReviewMediaProps = {
  media: ReviewMediaType[];
};

export function ReviewMedia({ media }: Readonly<ReviewMediaProps>) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (media.length === 0) return null;

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {media.map((item) => (
          <button
            key={item.id}
            type="button"
            className="relative size-20 overflow-hidden rounded-lg bg-muted transition-opacity hover:opacity-90"
            onClick={() => setSelectedImage(item.filePath)}
            aria-label="View review image"
          >
            <Image src={item.filePath} alt="Review image" fill className="object-cover" sizes="80px" />
          </button>
        ))}
      </div>

      <ReviewImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </>
  );
}
