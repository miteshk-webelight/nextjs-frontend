import Link from "next/link";
import { ROUTE } from "@/constants/routes.constants";
import { APP_CONSTANTS } from "@/constants/app.constants";

export function NavbarLogo() {
  return (
    <Link href={ROUTE.HOME} className="text-xl font-bold tracking-tight text-foreground">
      {APP_CONSTANTS.APP_NAME}
    </Link>
  );
}
