"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type KeyboardEvent, useRef, useState } from "react";

import { siteNavigation } from "@/config/site-navigation";

const mobilePanelId = "main-navigation-mobile-panel";

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function getDesktopLinkClassName(isActive: boolean) {
  const baseClassName =
    "rounded-md border px-3 py-2 text-sm font-medium no-underline transition-colors";

  if (isActive) {
    return `${baseClassName} border-brand-dark bg-surface-muted text-foreground underline decoration-brand-dark underline-offset-4`;
  }

  return `${baseClassName} border-transparent text-muted-foreground hover:bg-surface-muted hover:text-brand-active active:text-brand-active`;
}

function getMobileLinkClassName(isActive: boolean) {
  const baseClassName =
    "block rounded-md border-l-4 px-4 py-3 text-base no-underline transition-colors";

  if (isActive) {
    return `${baseClassName} border-brand-dark bg-surface-muted font-semibold text-foreground underline decoration-brand-dark underline-offset-4`;
  }

  return `${baseClassName} border-transparent text-muted-foreground hover:bg-surface-muted hover:text-brand-active active:text-brand-active`;
}

type NavigationContentProps = Readonly<{
  pathname: string;
}>;

function NavigationContent({ pathname }: NavigationContentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  function handleMobileKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Escape" || !isOpen) {
      return;
    }

    setIsOpen(false);
    menuButtonRef.current?.focus();
  }

  return (
    <>
      <ul className="hidden items-center gap-2 md:flex">
        {siteNavigation.map((item) => {
          const isActive = isActivePath(pathname, item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={getDesktopLinkClassName(isActive)}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="md:hidden" onKeyDown={handleMobileKeyDown}>
        <button
          ref={menuButtonRef}
          type="button"
          aria-expanded={isOpen}
          aria-controls={mobilePanelId}
          className="inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-surface px-4 py-2 text-sm font-semibold text-brand-dark transition-colors hover:bg-surface-muted hover:text-brand-active active:bg-surface-muted active:text-brand-active"
          onClick={() => setIsOpen((currentIsOpen) => !currentIsOpen)}
        >
          Menú
        </button>

        <div
          id={mobilePanelId}
          hidden={!isOpen}
          className="mt-3 md:hidden"
        >
          <ul className="space-y-1 rounded-lg border border-border bg-surface p-2 shadow-sm">
            {siteNavigation.map((item) => {
              const isActive = isActivePath(pathname, item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={getMobileLinkClassName(isActive)}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export function MainNavigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Navegación principal">
      <NavigationContent key={pathname} pathname={pathname} />
    </nav>
  );
}
