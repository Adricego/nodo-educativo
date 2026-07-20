# Tasks: Project Foundation

## Identificación

- Feature: `001-project-foundation`
- Estado: Ready for implementation
- Regla principal: ejecutar una tarea a la vez y verificarla antes de continuar.
- Aprobación requerida: no realizar commits, push ni despliegues en Vercel sin aprobación explícita.

## Reglas de ejecución

- Revisar `AGENTS.md`, la constitución y esta feature antes de modificar archivos.
- No instalar dependencias adicionales sin justificar su necesidad.
- No sobrescribir, mover o eliminar `AGENTS.md`, `spec/` o `.git/`.
- No crear archivos `.env` con valores reales.
- No implementar elementos reservados para features posteriores.
- Detenerse y pedir aclaración si el estado real del repositorio contradice este documento.

---

## Fase 0 — Inspección previa

### T001 — Confirmar ubicación y estado del repositorio

- [x] Confirmar que la terminal está ubicada en la raíz de `nodo-educativo`.
- [x] Confirmar la rama actual.
- [x] Revisar cambios pendientes en Git.
- [x] Revisar la estructura actual del repositorio.

---

## Fase 1 — Inicialización segura del proyecto

### T002 — Crear la aplicación Next.js en el repositorio existente

- [x] Definir y aprobar una estrategia segura para generar Next.js en un repositorio que ya contiene documentación.
- [x] Crear la aplicación usando Next.js, TypeScript, Tailwind CSS, App Router y la carpeta `src/`.
- [x] Preservar sin sobrescribir `AGENTS.md`, `spec/`, `docs/`, `.git/`, `.editorconfig` y `.gitattributes`.
- [x] Verificar que la estructura generada coincida con la arquitectura definida en `plan.md`.
- [x] No instalar dependencias adicionales fuera de las incluidas por la herramienta oficial de Next.js.
- [x] No implementar todavía diseño, navegación, CMS ni contenido editorial.

**Requiere aprobación antes de ejecutar comandos de generación o instalación.**

---

## Fase 2 — Validación técnica inicial

### T003 — Verificar configuración y comandos base

- [x] Revisar `package.json` y confirmar los scripts disponibles.
- [x] Confirmar que TypeScript está configurado en modo estricto.
- [x] Confirmar que Tailwind CSS quedó disponible.
- [x] Confirmar que la aplicación usa App Router y `src/app/`.
- [x] Revisar que `.gitignore` siga protegiendo dependencias, compilación y variables de entorno.
- [x] Documentar los comandos reales de desarrollo, lint y build.

### T004 — Ejecutar la aplicación localmente

- [x] Iniciar el servidor de desarrollo.
- [x] Confirmar que la ruta principal responde sin errores.
- [x] Revisar errores visibles en la terminal.
- [x] Confirmar que la aplicación puede abrirse desde navegador local.
- [x] Detener el servidor correctamente después de la verificación.

---

## Fase 3 — Página temporal inicial

### T005 — Implementar página temporal de Nodo Educativo

- [x] Crear una página inicial temporal en `src/app/page.tsx`.
- [x] Mostrar el nombre “Nodo Educativo”.
- [x] Mostrar una descripción breve sobre noticias, herramientas y tecnología educativa para docentes de Chile.
- [x] Mostrar un mensaje de portal en preparación o próxima apertura.
- [x] Utilizar Tailwind CSS.
- [x] Mantener una estética moderna, educativa y profesional.
- [x] Garantizar lectura clara en móvil y escritorio.
- [x] No incluir formularios, suscripciones, contacto ni captura de datos.
- [x] No implementar header, footer o navegación definitiva.

### T006 — Revisar accesibilidad y estructura básica

- [x] Usar estructura HTML semántica.
- [x] Verificar jerarquía correcta de encabezados.
- [x] Confirmar contraste legible.
- [x] Confirmar que la interfaz sea usable en pantallas pequeñas.
- [x] Verificar que no dependa solo del color para comunicar información.

---

## Fase 4 — Documentación y validación

### T007 — Documentar ejecución local

- [x] Actualizar `README.md` con requisitos previos.
- [x] Documentar cómo instalar dependencias.
- [x] Documentar cómo iniciar el proyecto.
- [x] Documentar cómo ejecutar lint.
- [x] Documentar cómo generar el build de producción.
- [x] Mantener el README breve y coherente con el estado real del proyecto.

### T008 — Ejecutar validaciones de calidad

- [x] Ejecutar el comando de lint disponible.
- [x] Ejecutar el comando de build disponible.
- [x] Resolver errores atribuibles a esta feature.
- [x] Revisar cambios con `git diff`.
- [x] Confirmar que no existan secretos ni archivos sensibles.
- [x] Confirmar que el proyecto sigue respetando `AGENTS.md`.

---

## Fase 5 — Despliegue inicial

### T009 — Configurar despliegue en Vercel

- [x] Conectar el repositorio GitHub con Vercel.
- [x] Crear el proyecto `nodo-educativo` en Vercel.
- [x] Usar detección automática de configuración.
- [x] Mantener el dominio temporal de Vercel.
- [x] No configurar DNS ni dominio personalizado.
- [x] No agregar variables de entorno reales durante esta feature.

**Requiere aprobación explícita antes de conectar o desplegar en Vercel.**

**Resultado:** despliegue inicial exitoso en el dominio temporal de Vercel:
`https://nodo-educativo.vercel.app`

### T010 — Verificar versión desplegada y cerrar feature

- [x] Confirmar que la URL temporal de Vercel carga correctamente.
- [x] Confirmar que muestra la misma página temporal validada localmente.
- [x] Revisar visualmente la versión móvil y escritorio.
- [x] Actualizar los criterios de aceptación cumplidos en `spec.md`.
- [x] Marcar tareas completadas en `tasks.md`.
- [x] Ejecutar revisión final con `git status`, `git diff --check`, lint y build.
- [x] Realizar commit, push y pull request solo con aprobación explícita.

**Comandos sugeridos:**

```bash
pwd
git branch --show-current
git status --short
ls -la
