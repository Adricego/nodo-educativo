# Plan: Project Foundation

## Identificación

- Feature: `001-project-foundation`
- Estado: Ready for implementation
- Tipo: Fundación técnica
- Dependencias previas: Documentos de constitución y `spec.md` de la feature
- Dependencias futuras: `002-system-visual-and-navigation`

## Objetivo técnico

Preparar una aplicación web inicial de Nodo Educativo que pueda ejecutarse en local, validarse mediante comandos de calidad, mantenerse en GitHub y desplegarse en Vercel.

La implementación debe dejar una base simple, segura y extensible para las futuras features del portal, sin adelantar funcionalidades reservadas al sistema visual, CMS, contenido editorial, autenticación o base de datos.

## Decisiones técnicas

- Usar Next.js como framework principal.
- Usar TypeScript en modo estricto.
- Usar Tailwind CSS para estilos.
- Usar npm como gestor de paquetes.
- Utilizar App Router de Next.js.
- Ubicar el código fuente dentro de `src/`.
- Mantener la aplicación en la raíz del repositorio `nodo-educativo`.
- Usar la configuración generada por la herramienta oficial de Next.js cuando sea suficiente.
- No instalar dependencias adicionales durante esta feature salvo que exista una justificación explícita y aprobación.
- No crear configuración personalizada de Vercel mientras la detección automática sea suficiente.
- Usar el dominio temporal de Vercel durante esta etapa.
- Nombrar el proyecto de Vercel como `nodo-educativo`.

## Estrategia de inicialización segura

La aplicación Next.js no se generará directamente en la raíz del repositorio,
porque el repositorio ya contiene documentación, reglas de agentes y configuración
de Git que deben preservarse.

Para T002 se utilizará una carpeta temporal fuera del repositorio. Allí se generará
una aplicación Next.js vacía con TypeScript, Tailwind CSS, ESLint, App Router,
carpeta `src/` y npm.

La inicialización temporal no debe crear un repositorio Git adicional ni reemplazar
el `AGENTS.md` existente.

Después de revisar el contenido generado, solo se incorporarán a la raíz del
repositorio los archivos necesarios para la base de Next.js:

- `package.json`
- `package-lock.json`
- `tsconfig.json`
- `next-env.d.ts`
- archivos de configuración generados por Next.js, ESLint y PostCSS
- `src/`
- `public/`, solo si contiene archivos necesarios

No se deben copiar ni sobrescribir:

- `AGENTS.md`
- `README.md`
- `.gitignore`
- `.editorconfig`
- `.gitattributes`
- `spec/`
- `docs/`
- `.git/`
- `node_modules/`

Una vez incorporados `package.json` y `package-lock.json`, las dependencias se
instalarán en la raíz mediante `npm ci`.

## Límites de alcance

Esta feature no debe implementar:

- Header, footer o menú de navegación definitivos.
- Sistema de diseño, logotipo, paleta o tipografía de marca definitiva.
- Componentes reutilizables anticipados.
- CMS o integración con Sanity.
- Noticias, herramientas, gadgets ni datos editoriales de ejemplo.
- Formularios de contacto o suscripción.
- Autenticación, usuarios, comentarios o datos personales.
- Base de datos, PostgreSQL o DBeaver.
- Analítica, publicidad o integraciones avanzadas con IA.
- Dominio personalizado.
- Configuración de DNS.
- Configuración manual de producción no requerida por Vercel.

## Arquitectura inicial propuesta

La estructura esperada al finalizar la feature será similar a esta:

```text
nodo-educativo/
├── AGENTS.md
├── README.md
├── package.json
├── package-lock.json
├── tsconfig.json
├── .gitignore
├── public/
├── spec/
│   ├── constitution/
│   └── features/
│       └── 001-project-foundation/
│           ├── spec.md
│           ├── plan.md
│           └── tasks.md
├── src/
│   └── app/
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
└── archivos de configuración generados por Next.js