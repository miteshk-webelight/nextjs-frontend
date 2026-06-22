"use client";

import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCw } from "lucide-react";

type ErrorStateProps = {
  message?: string;
  onRetry?: () => void;
};

export function ErrorState({
  message = "Something went wrong. Please try again.",
  onRetry,
}: Readonly<ErrorStateProps>) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16">
      <AlertCircle className="size-10 text-destructive" aria-hidden />
      <p className="text-center text-sm text-muted-foreground">{message}</p>
      {onRetry && (
        <Button variant="outline" size="sm" onClick={onRetry} aria-label="Retry loading">
          <RefreshCw className="mr-2 size-4" />
          Retry
        </Button>
      )}
    </div>
  );
}
