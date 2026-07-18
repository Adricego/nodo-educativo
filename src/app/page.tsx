export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-16 sm:px-10 lg:px-12">
        <div className="max-w-3xl">
          <p className="mb-6 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
            Portal educativo en preparación
          </p>

          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Nodo Educativo
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            Noticias, herramientas digitales y tecnología educativa explicadas
            para docentes y comunidades educativas de Chile.
          </p>

          <p className="mt-8 max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-6 text-base leading-7 text-slate-200 shadow-2xl shadow-cyan-950/30 backdrop-blur sm:text-lg">
            Estamos preparando una primera versión clara, útil y responsable
            para acompañar el trabajo docente con información tecnológica de
            valor pedagógico.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <article className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-base font-semibold text-cyan-100">
              Noticias educativas
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Contexto y explicación para entender cambios relevantes en
              educación y tecnología.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-base font-semibold text-emerald-100">
              Herramientas docentes
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Miradas prácticas sobre plataformas digitales y usos posibles en
              el aula.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-base font-semibold text-amber-100">
              Tecnología con propósito
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Criterios pedagógicos para evaluar recursos, dispositivos y
              tendencias emergentes.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
