"use client";

import { useEffect, useRef } from "react";

type InfiniteScrollTriggerProps = {
  enabled: boolean;
  loading: boolean;
  onLoadMore: () => void;
};

export function InfiniteScrollTrigger({ enabled, loading, onLoadMore }: Readonly<InfiniteScrollTriggerProps>) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !enabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !loading) {
          onLoadMore();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [enabled, loading, onLoadMore]);

  return <div ref={ref} className="h-1" />;
}
