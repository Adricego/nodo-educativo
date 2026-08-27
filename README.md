# Nodo Educativo

**Nodo Educativo** es un portal web de noticias, herramientas digitales y tecnología educativa dirigido principalmente a docentes y comunidades educativas de Chile.

El proyecto busca transformar información sobre educación y tecnología en contenido útil, comprensible y responsable para quienes enseñan.

🌐 **Versión pública:**
https://nodo-educativo.vercel.app

---

## Sobre el proyecto

Nodo Educativo nace con tres objetivos principales:

- Informar sobre noticias relevantes del sistema educativo chileno.
- Presentar herramientas digitales e inteligencia artificial aplicables al trabajo docente.
- Analizar tecnologías, dispositivos y accesorios que puedan aportar al trabajo pedagógico.

La propuesta no consiste solamente en reunir enlaces o noticias. El objetivo es explicar **por qué una noticia, herramienta o tecnología puede ser relevante para la práctica docente**, incluyendo sus posibilidades, limitaciones y contexto de uso.

---

## Estado actual

El proyecto se encuentra actualmente en desarrollo activo.

### Completado

#### Feature 001 — Project Foundation

- Proyecto Next.js.
- TypeScript en modo estricto.
- Tailwind CSS.
- ESLint.
- App Router.
- Configuración de desarrollo con WSL y Node.js 22.
- Integración con Git y GitHub.
- Flujo mediante ramas, Pull Requests y merge a `main`.
- Primer despliegue en Vercel.

#### Feature 002 — Sistema visual y navegación

- Sistema visual inicial **Frosted aura**.
- Tipografía Geist Sans.
- Layout global.
- Header y navegación principal.
- Menú responsive para dispositivos móviles.
- Estado activo de navegación.
- Footer.
- Componentes UI reutilizables.
- Skip link.
- Navegación mediante teclado.
- Foco visible.
- Accesibilidad básica.
- Diseño responsive validado entre 320 px y 1440 px.

### Próxima etapa

#### Feature 003 — Modelos de contenido y CMS

La siguiente etapa incorporará la infraestructura editorial mediante **Sanity CMS**.

Se trabajará en:

- modelo de noticias;
- modelo de herramientas digitales;
- modelo de Aliados del escritorio;
- categorías;
- borradores y publicaciones;
- fechas de publicación y revisión;
- conexión entre Next.js y Sanity.

---

## Secciones del portal

Actualmente existen las siguientes rutas:

| Sección | Ruta |
|---|---|
| Inicio | `/` |
| Noticias | `/noticias` |
| Herramientas digitales | `/herramientas` |
| Aliados del escritorio | `/aliados-del-escritorio` |
| Quiénes somos | `/quienes-somos` |

Las páginas que todavía no poseen contenido editorial utilizan placeholders explícitos y no presentan información ficticia como real.

---

## Stack tecnológico

### Implementado actualmente

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **ESLint**
- **Node.js 22**
- **Git**
- **GitHub**
- **Vercel**


### Fuera del alcance inmediato

- PostgreSQL.
- DBeaver.
- Newsletter.
- Analítica propia.
- Automatizaciones editoriales.
- Integraciones avanzadas con IA.

Estas tecnologías se incorporarán solamente cuando exista una necesidad funcional concreta.

---

## Desarrollo basado en especificaciones

Nodo Educativo está siendo construido mediante un enfoque de **Spec-Driven Development (SDD)**.

Cada feature importante sigue el flujo:

```text
spec.md
   ↓
plan.md
   ↓
tasks.md
   ↓
implementación
   ↓
verificación
   ↓
Pull Request
   ↓
merge a main
```
---

## Desarrollo asistido por agentes

El proyecto también se utiliza como entorno de aprendizaje y experimentación con agentes de desarrollo.

Se han utilizado herramientas como:

- OpenCode.
- Codex.
- Modelos de lenguaje para planificación, revisión e implementación asistida.

Los agentes no funcionan como una fuente autónoma de decisiones.

El flujo utilizado mantiene revisión humana sobre:

- alcance de las features;
- arquitectura;
- cambios de código;
- `git diff`;
- accesibilidad;
- responsive;
- lint;
- build;
- commits;
- Pull Requests;
- despliegues.

Los agentes no deben realizar commits, despliegues ni cambios sensibles sin aprobación explícita.

---

## Desarrollo local

### Requisitos

El entorno principal de desarrollo utiliza:

- WSL.
- Node.js 22 administrado mediante `nvm`.
- npm.
- Git.
---

## Despliegue

El proyecto está conectado a **Vercel** mediante GitHub.

El flujo de trabajo utilizado es:

```text
feature branch
      ↓
commit + push
      ↓
Pull Request
      ↓
revisión
      ↓
merge a main
      ↓
Vercel
      ↓
Production Deployment
```

La rama `main` representa la versión estable utilizada para producción.

🌐 https://nodo-educativo.vercel.app

---

## Documentación

La documentación técnica y de producto se encuentra principalmente en:

```text
spec/
├── constitution/
│   ├── mission.md
│   ├── roadmap.md
│   ├── conventions.md
│   ├── security.md
│   └── tech-stack.md
│
└── features/
    ├── 001-project-foundation/
    ├── 002-system-visual-and-navigation/
    └── ...
```

`AGENTS.md` contiene las reglas que deben seguir los agentes y colaboradores al trabajar en el repositorio.

---

## Visión

Nodo Educativo busca convertirse en un espacio donde docentes y comunidades educativas puedan comprender mejor cómo los cambios tecnológicos, las herramientas digitales y la innovación pueden relacionarse con la práctica educativa.

La tecnología es el medio.
El valor del proyecto está en **explicar, contextualizar y ayudar a tomar mejores decisiones pedagógicas**.
