"use client";

import { Input } from "@/components/ui/input";
import { Loader2, Search } from "lucide-react";
import { memo } from "react";

type ProductSearchProps = {
  value: string;
  onChange: (value: string) => void;
  isSearching?: boolean;
};

export const ProductSearch = memo(function ProductSearch({ value, onChange, isSearching = false }: ProductSearchProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search products..."
        className="pl-10 pr-10"
      />
      {isSearching && (
        <Loader2 className="absolute right-3 top-1/2 size-4 -translate-y-1/2 animate-spin text-muted-foreground" />
      )}
    </div>
  );
});
