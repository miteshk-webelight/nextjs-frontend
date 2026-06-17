"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./navbar.constants";
import { cn } from "@/lib/utils";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-1 md:flex">
      {navLinks.map((item) => {
        const isActive = pathname === item.route;
        return (
          <Link
            key={item.key}
            href={item.route}
            className={cn(
              "rounded-2xl px-3 py-2 text-sm font-medium transition-colors",
              isActive
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
