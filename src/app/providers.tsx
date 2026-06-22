import { QueryProvider } from "@/providers/query-provider";

export default function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return <QueryProvider>{children}</QueryProvider>;
}
