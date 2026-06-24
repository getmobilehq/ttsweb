import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "dark" | "ghost" | "light";

// Internal app routes get next/link; mailto/hash/external get a plain anchor.
function isInternal(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

export function Button({
  href,
  variant = "primary",
  keep = false,
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  keep?: boolean; // stays visible in the mobile nav (HANDOFF prototype `.keep`)
  className?: string;
  children: ReactNode;
}) {
  const cls = `btn btn-${variant}${keep ? " keep" : ""}${className ? ` ${className}` : ""}`;
  if (isInternal(href)) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cls}>
      {children}
    </a>
  );
}
