import Link from "next/link";

type SiteBrandProps = Readonly<{
  className?: string;
}>;

export function SiteBrand({ className }: SiteBrandProps) {
  const baseClassName =
    "inline-flex items-center rounded-sm py-2 text-lg font-bold tracking-tight text-brand-dark no-underline transition-colors hover:text-brand-active focus-visible:text-brand-active";

  return (
    <Link
      href="/"
      className={className ? `${baseClassName} ${className}` : baseClassName}
    >
      Nodo Educativo
    </Link>
  );
}
