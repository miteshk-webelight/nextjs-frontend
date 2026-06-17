"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, LogIn } from "lucide-react";
import { ROUTE } from "@/constants/routes.constants";
import { navLinks } from "./navbar.constants";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { APP_CONSTANTS } from "@/constants/app.constants";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, user } = useAuth();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full max-w-xs">
        <SheetHeader>
          <SheetTitle>
            <Link href={ROUTE.HOME} className="text-xl font-bold tracking-tight">
              {APP_CONSTANTS.APP_NAME}
            </Link>
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((item) => (
            <SheetClose key={item.key} asChild>
              <Link
                href={item.route}
                className={cn(
                  "flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium transition-colors",
                  "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                )}
              >
                {item.label}
              </Link>
            </SheetClose>
          ))}
        </nav>

        <Separator />

        <div className="flex items-center justify-between px-6 py-4">
          <span className="text-sm text-muted-foreground">Theme</span>
          <ThemeToggle />
        </div>

        <Separator />

        <div className="px-6 py-4">
          {isAuthenticated && user ? (
            <div className="flex flex-col gap-3">
              <p className="text-sm text-muted-foreground">
                Signed in as <span className="font-medium text-foreground">{user.name}</span>
              </p>
              <SheetClose asChild>
                <Button asChild variant="outline" size="sm">
                  <Link href={ROUTE.PROFILE}>Profile</Link>
                </Button>
              </SheetClose>
            </div>
          ) : (
            <SheetClose asChild>
              <Button asChild className="w-full" size="sm">
                <Link href={ROUTE.LOGIN}>
                  <LogIn className="size-4" />
                  Login
                </Link>
              </Button>
            </SheetClose>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
