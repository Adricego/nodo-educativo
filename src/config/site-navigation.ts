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
    label: "Herramientas digitales",
    href: "/herramientas",
  },
  {
    label: "Aliados del escritorio",
    href: "/aliados-del-escritorio",
  },
  {
    label: "Quiénes somos",
    href: "/quienes-somos",
  },
] as const satisfies readonly NavigationItem[];
