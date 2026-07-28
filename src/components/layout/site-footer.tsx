import Link from "next/link";

import { siteNavigation } from "@/config/site-navigation";

import { Container } from "../ui/container";
import { SiteBrand } from "../ui/site-brand";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-muted py-10 text-foreground">
      <Container>
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
          <div className="max-w-md space-y-3">
            <SiteBrand />
            <p className="text-sm leading-6 text-muted-foreground">
              Noticias, herramientas y tecnología educativa para docentes de
              Chile.
            </p>
          </div>

          <nav aria-label="Navegación del pie de página">
            <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap md:justify-end">
              {siteNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex rounded-sm py-1 text-sm font-medium text-brand-dark underline-offset-4 transition-colors hover:text-brand-active hover:underline active:text-brand-active"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-sm text-muted-foreground">
          &copy; {currentYear} Nodo Educativo.
        </div>
      </Container>
    </footer>
  );
}
