import Link from "next/link";
import type { ReactNode } from "react";

type CtaLinkProps = Readonly<{
  href: `/${string}`;
  children: ReactNode;
  className?: string;
}>;

export function CtaLink({ href, children, className }: CtaLinkProps) {
  const baseClassName =
    "inline-flex min-h-11 items-center justify-center rounded-md bg-brand-dark px-5 py-3 text-sm font-semibold text-white no-underline transition-colors visited:text-white hover:bg-brand-active hover:text-white focus-visible:text-white active:bg-brand-active active:text-white";

  return (
    <Link
      href={href}
      className={className ? `${baseClassName} ${className}` : baseClassName}
    >
      {children}
    </Link>
  );
}
