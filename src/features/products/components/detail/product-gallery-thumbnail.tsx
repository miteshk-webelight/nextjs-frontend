"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

type ProductGalleryThumbnailProps = {
  src: string;
  alt: string;
  isActive: boolean;
  onClick: () => void;
};

export function ProductGalleryThumbnail({ src, alt, isActive, onClick }: Readonly<ProductGalleryThumbnailProps>) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`View ${alt}`}
      className={cn(
        "relative aspect-square size-16 overflow-hidden rounded-md border-2 bg-muted transition-all duration-200 sm:size-20",
        isActive ? "border-primary ring-1 ring-primary" : "border-transparent hover:border-muted-foreground/30",
      )}
    >
      <Image src={src} alt={alt} fill className="object-cover" sizes="80px" />
    </button>
  );
}
