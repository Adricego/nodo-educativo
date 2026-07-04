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

- [ ] Confirmar que la terminal está ubicada en la raíz de `nodo-educativo`.
- [ ] Confirmar la rama actual.
- [ ] Revisar cambios pendientes en Git.
- [ ] Revisar la estructura actual del repositorio.

**Comandos sugeridos:**

```bash
pwd
git branch --show-current
git status --short
ls -la