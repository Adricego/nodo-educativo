export type NavigationItem = {
  label: string;
  href: string;
};

export const siteNavigation = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Noticias",
    href: "/noticias",
  },
  {
    label: "Herramientas",
    href: "/herramientas",
  },
  {
    label: "Gadgets",
    href: "/gadgets",
  },
  {
    label: "Quiénes somos",
    href: "/quienes-somos",
  },
] as const satisfies readonly NavigationItem[];
