import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ProductCardSkeleton() {
  return (
    <Card className="flex flex-col overflow-hidden">
      <Skeleton className="aspect-square w-full" />

      <CardContent className="flex flex-1 flex-col gap-2 p-4">
        <Skeleton className="h-4 min-w-full" />

        <div className="flex items-center gap-2">
          <Skeleton className="h-6 w-22" />
          <Skeleton className="h-5 w-16" />
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Skeleton className="h-12 w-full" />
      </CardFooter>
    </Card>
  );
}
