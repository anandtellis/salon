import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <span className={cn("font-headline text-2xl font-bold text-primary")}>
        Aura
      </span>
      <span className={cn("font-headline text-2xl font-normal text-foreground")}>
        &nbsp;Salon & Spa
      </span>
    </Link>
  );
}
