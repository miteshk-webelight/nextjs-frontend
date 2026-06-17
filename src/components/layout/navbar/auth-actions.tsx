"use client";

import Link from "next/link";
import { LogIn } from "lucide-react";
import { ROUTE } from "@/constants/routes.constants";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { UserMenu } from "./user-menu";

export function AuthActions() {
  const { isAuthenticated, user } = useAuth();

  if (isAuthenticated && user) {
    return <UserMenu user={user} />;
  }

  return (
    <Button asChild variant="default" size="sm">
      <Link href={ROUTE.LOGIN}>
        <LogIn className="size-4" />
        Login
      </Link>
    </Button>
  );
}
