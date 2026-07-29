import Link from "next/link";

import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";

const portalAreas = [
  {
    title: "Noticias",
    description:
      "Un espacio para contextualizar información relevante sobre educación, tecnología y políticas públicas vinculadas al sistema educativo chileno.",
    href: "/noticias",
    linkLabel: "Ver noticias",
  },
  {
    title: "Herramientas",
    description:
      "Una futura guía para revisar plataformas digitales y recursos tecnológicos con criterios pedagógicos claros.",
    href: "/herramientas",
    linkLabel: "Explorar herramientas",
  },
  {
    title: "Gadgets",
    description:
      "Una sección para analizar dispositivos y equipamiento con potencial de uso educativo, sin recomendaciones comerciales prematuras.",
    href: "/gadgets",
    linkLabel: "Ver gadgets",
  },
] as const;

export default function Home() {
  return (
    <>
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)] lg:items-center">
            <div className="max-w-3xl space-y-8">
              <div className="space-y-5">
                <p className="inline-flex rounded-full border border-border bg-surface-muted px-4 py-2 text-sm font-semibold text-brand-dark">
                  Nodo Educativo · Portal educativo en etapa inicial
                </p>

                <div className="space-y-6">
                  <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                    Información y herramientas para enseñar con tecnología
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                    Noticias, herramientas y tecnología educativa para docentes
                    y comunidades educativas de Chile.
                  </p>
                </div>
              </div>

              <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                Estamos construyendo una primera versión del portal para
                organizar información tecnológica útil, comprensible y
                responsable para quienes enseñan.
              </p>

              <CtaLink href="/quienes-somos">Conocer el proyecto</CtaLink>
            </div>

            <aside className="rounded-2xl border border-border bg-surface-muted p-6 text-foreground">
              <h2 className="text-lg font-semibold text-foreground">
                Información institucional
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-6 text-muted-foreground">
                <p>
                  Nodo Educativo está dirigido principalmente a docentes y
                  comunidades educativas de Chile.
                </p>
                <p>
                  El proyecto se encuentra en desarrollo y todavía no publica
                  noticias reales, catálogos ni análisis de productos.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Áreas que estamos preparando
            </h2>
            <p className="text-base leading-7 text-muted-foreground sm:text-lg">
              Estas secciones formarán la base inicial del portal y actualmente
              se encuentran en preparación.
            </p>
          </div>

          <ul className="mt-10 grid gap-5 lg:grid-cols-3">
            {portalAreas.map((area) => (
              <li
                key={area.href}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <article className="flex h-full flex-col gap-5">
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {area.title}
                    </h3>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {area.description}
                    </p>
                  </div>

                  <Link
                    href={area.href}
                    className="mt-auto inline-flex font-semibold text-brand-dark underline-offset-4 transition-colors hover:text-brand-active hover:underline active:text-brand-active"
                  >
                    {area.linkLabel}
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
