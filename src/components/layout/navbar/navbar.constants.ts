import { ROUTE } from "@/constants/routes.constants";
import { ShoppingCart, Package, LayoutGrid, Home } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavLink = {
  key: string;
  label: string;
  route: string;
  icon?: LucideIcon;
};

export const navLinks: NavLink[] = [
  { key: "home", label: "Home", route: ROUTE.HOME, icon: Home },
  { key: "products", label: "Products", route: "/products", icon: Package },
  { key: "categories", label: "Categories", route: "/categories", icon: LayoutGrid },
  { key: "cart", label: "Cart", route: ROUTE.CART, icon: ShoppingCart },
  { key: "orders", label: "Orders", route: ROUTE.ORDERS, icon: Package },
];
