import { StarIcon } from "lucide-react";

type ProductRatingProps = {
  averageRating: number;
  reviewCount: number;
};

function StarRating({ rating }: Readonly<{ rating: number }>) {
  const fullStars = Math.round(rating);

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, index) => (
        <StarIcon
          key={index}
          className={`size-4 transition-colors ${
            index < fullStars ? "fill-yellow-500 text-yellow-500" : "fill-muted text-muted-foreground"
          }`}
        />
      ))}
    </div>
  );
}

export function ProductRating({ averageRating, reviewCount }: Readonly<ProductRatingProps>) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <StarRating rating={averageRating} />

      <span className="font-medium text-foreground">{averageRating.toFixed(1)}</span>

      <span className="text-muted-foreground">•</span>

      <span className="text-sm text-muted-foreground">
        {reviewCount.toLocaleString()} {reviewCount === 1 ? "Review" : "Reviews"}
      </span>
    </div>
  );
}
