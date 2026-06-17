"use client";

import type { UseAuthReturn } from "@/types/auth.types";

export function useAuth(): UseAuthReturn {
  return {
    isAuthenticated: false,
    user: null,
  };
}
