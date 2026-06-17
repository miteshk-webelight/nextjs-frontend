"use client";

import { NavbarLogo } from "./navbar-logo";
import { NavLinks } from "./nav-links";
import { ThemeToggle } from "./theme-toggle";
import { AuthActions } from "./auth-actions";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-6">
          <MobileMenu />
          <NavbarLogo />
        </div>

        <NavLinks />

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <AuthActions />
        </div>
      </div>
    </header>
  );
}
