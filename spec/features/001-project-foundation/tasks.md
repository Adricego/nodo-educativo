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

- [ ] Iniciar el servidor de desarrollo.
- [ ] Confirmar que la ruta principal responde sin errores.
- [ ] Revisar errores visibles en la terminal.
- [ ] Confirmar que la aplicación puede abrirse desde navegador local.
- [ ] Detener el servidor correctamente después de la verificación.

---

## Fase 3 — Página temporal inicial

### T005 — Implementar página temporal de Nodo Educativo

- [ ] Crear una página inicial temporal en `src/app/page.tsx`.
- [ ] Mostrar el nombre “Nodo Educativo”.
- [ ] Mostrar una descripción breve sobre noticias, herramientas y tecnología educativa para docentes de Chile.
- [ ] Mostrar un mensaje de portal en preparación o próxima apertura.
- [ ] Utilizar Tailwind CSS.
- [ ] Mantener una estética moderna, educativa y profesional.
- [ ] Garantizar lectura clara en móvil y escritorio.
- [ ] No incluir formularios, suscripciones, contacto ni captura de datos.
- [ ] No implementar header, footer o navegación definitiva.

### T006 — Revisar accesibilidad y estructura básica

- [ ] Usar estructura HTML semántica.
- [ ] Verificar jerarquía correcta de encabezados.
- [ ] Confirmar contraste legible.
- [ ] Confirmar que la interfaz sea usable en pantallas pequeñas.
- [ ] Verificar que no dependa solo del color para comunicar información.

---

## Fase 4 — Documentación y validación

### T007 — Documentar ejecución local

- [ ] Actualizar `README.md` con requisitos previos.
- [ ] Documentar cómo instalar dependencias.
- [ ] Documentar cómo iniciar el proyecto.
- [ ] Documentar cómo ejecutar lint.
- [ ] Documentar cómo generar el build de producción.
- [ ] Mantener el README breve y coherente con el estado real del proyecto.

### T008 — Ejecutar validaciones de calidad

- [ ] Ejecutar el comando de lint disponible.
- [ ] Ejecutar el comando de build disponible.
- [ ] Resolver errores atribuibles a esta feature.
- [ ] Revisar cambios con `git diff`.
- [ ] Confirmar que no existan secretos ni archivos sensibles.
- [ ] Confirmar que el proyecto sigue respetando `AGENTS.md`.

---

## Fase 5 — Despliegue inicial

### T009 — Configurar despliegue en Vercel

- [ ] Conectar el repositorio GitHub con Vercel.
- [ ] Crear el proyecto `nodo-educativo` en Vercel.
- [ ] Usar detección automática de configuración.
- [ ] Mantener el dominio temporal de Vercel.
- [ ] No configurar DNS ni dominio personalizado.
- [ ] No agregar variables de entorno reales durante esta feature.

**Requiere aprobación explícita antes de conectar o desplegar en Vercel.**

### T010 — Verificar versión desplegada y cerrar feature

- [ ] Confirmar que la URL temporal de Vercel carga correctamente.
- [ ] Confirmar que muestra la misma página temporal validada localmente.
- [ ] Revisar visualmente la versión móvil y escritorio.
- [ ] Actualizar los criterios de aceptación cumplidos en `spec.md`.
- [ ] Marcar tareas completadas en `tasks.md`.
- [ ] Ejecutar revisión final con `git status`, `git diff --check`, lint y build.
- [ ] Realizar commit, push y pull request solo con aprobación explícita.

**Comandos sugeridos:**

```bash
pwd
git branch --show-current
git status --short
ls -la
