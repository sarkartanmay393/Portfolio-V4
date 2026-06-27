"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  navbar: { href: string; label: string }[];
}

export default function Navbar({ navbar }: NavbarProps) {
  const pathname = usePathname();

  return (
    <nav className="flex items-baseline justify-between gap-4 flex-wrap pt-2 pb-6">
      <div className="flex items-baseline gap-5 flex-wrap">
        {navbar.map((item) => {
          const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm transition-colors hover:text-foreground",
                isActive ? "text-foreground font-medium" : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
      <ModeToggle />
    </nav>
  );
}
