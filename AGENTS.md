# Nodo Educativo

Nodo Educativo es un portal web de noticias, herramientas y tecnología educativa,
dirigido principalmente a docentes y comunidades educativas de Chile.

El proyecto busca transformar información tecnológica, noticias educativas y análisis
de herramientas en contenido útil, comprensible y responsable para quienes enseñan.

## Fuente de verdad del proyecto

Antes de proponer o implementar cambios, revisar estos archivos:

1. `spec/constitution/mission.md`
2. `spec/constitution/tech-stack.md`
3. `spec/constitution/conventions.md`
4. `spec/constitution/security.md`
5. `spec/constitution/roadmap.md`
6. La especificación de la feature actual dentro de `spec/features/`

Si existe una contradicción entre una tarea y la constitución, detenerse y pedir aclaración.

## Stack actual

- Framework: Next.js.
- Lenguaje: TypeScript estricto.
- Estilos: Tailwind CSS.
- CMS: Sanity CMS.
- Control de versiones: Git y GitHub.
- Despliegue inicial: Vercel.
- Entorno de desarrollo: WSL, Bash, Warp y VS Code.

## Stack futuro

No implementar todavía, salvo instrucción explícita:

- PostgreSQL.
- DBeaver.
- Newsletter.
- Registro de usuarios.
- Automatizaciones editoriales.
- Analítica propia.
- Integraciones avanzadas con IA.
- Google AdSense activo.

## Alcance del MVP

La primera versión pública debe incluir:

- Página principal.
- Noticias Chile.
- Catálogo de herramientas docentes.
- Sección de gadgets educativos.
- Página Quiénes Somos.
- CMS para administrar contenido.
- SEO básico.
- Despliegue inicial en Vercel.

## Funcionalidades excluidas del MVP

No implementar:

- Comentarios públicos.
- Perfiles de estudiantes.
- Datos personales de alumnos.
- Registro o inicio de sesión de usuarios.
- Rankings de herramientas sin metodología explícita.
- Patrocinios sin identificación visible.
- Publicación automática de noticias.
- Google AdSense activo antes de aprobación editorial y técnica.
- PostgreSQL antes de que exista una necesidad real definida.

## Convenciones principales

- Usar TypeScript estricto.
- No usar `any` sin justificación explícita.
- Usar `camelCase` para variables y funciones.
- Usar `PascalCase` para componentes React, tipos e interfaces.
- Usar inglés para nombres técnicos de código.
- Usar español para contenido editorial visible al visitante.
- Priorizar componentes pequeños y reutilizables.
- Usar Tailwind CSS.
- Diseñar primero para móvil y luego para escritorio.
- Priorizar HTML semántico, accesibilidad y navegación por teclado.
- Mantener contenido editorial separado del código.
- Identificar datos temporales como `mock`, `sample` o `placeholder`.

## Reglas de seguridad

- Nunca subir archivos `.env`, claves, tokens o credenciales al repositorio.
- No escribir secretos directamente en el código.
- Usar variables de entorno para servicios externos.
- No modificar configuraciones de DNS, dominios o producción sin aprobación explícita.
- No ejecutar comandos destructivos sin explicar su efecto y solicitar aprobación.
- No instalar dependencias nuevas sin justificar su propósito.
- No inventar noticias, fuentes, estadísticas, precios o referencias como si fueran reales.
- No publicar contenido editorial sin revisión humana.

## Flujo de trabajo con agentes

### Para tareas no triviales

1. Leer la especificación correspondiente.
2. Analizar el estado actual del repositorio.
3. Proponer un plan.
4. Esperar aprobación antes de modificar código.
5. Dividir el trabajo en tareas pequeñas y verificables.
6. Implementar una tarea a la vez.
7. Verificar los resultados.
8. Explicar los cambios realizados.

### Para tareas pequeñas y evidentes

Se puede implementar directamente solo si:

- El alcance está claro.
- No afecta arquitectura.
- No instala dependencias.
- No modifica configuraciones sensibles.
- No cambia múltiples áreas del proyecto.

## Reglas sobre cambios

- No modificar archivos fuera del alcance del ticket actual.
- No eliminar archivos o carpetas sin explicar el impacto.
- No hacer commits sin aprobación explícita.
- No desplegar en Vercel sin aprobación explícita.
- No crear ramas sin indicación del usuario.
- No cambiar la arquitectura del proyecto sin actualizar la documentación correspondiente.
- No introducir librerías alternativas si el stack actual ya cubre la necesidad.

## Comandos esperados

Cuando el proyecto tenga su configuración de Next.js:

- `npm run dev` — iniciar servidor local.
- `npm run lint` — revisar errores de estilo y calidad.
- `npm run build` — validar compilación de producción.
- `npm run test` — ejecutar pruebas, cuando existan.

No asumir que un comando existe sin revisar primero `package.json`.

## Verificación obligatoria

Antes de declarar una tarea terminada:

1. Revisar los archivos modificados.
2. Ejecutar `npm run lint` cuando esté disponible.
3. Ejecutar `npm run build` cuando esté disponible.
4. Informar si alguna prueba no pudo ejecutarse.
5. Revisar que no se hayan incluido secretos o datos sensibles.
6. Comprobar que los cambios respetan los criterios de aceptación.
7. Recomendar la siguiente tarea pequeña del roadmap.

## Formato de cierre esperado

Al finalizar una tarea, responder con:

1. Resumen de cambios.
2. Archivos creados, modificados o eliminados.
3. Pruebas ejecutadas.
4. Resultado de las pruebas.
5. Riesgos, límites o pendientes.
6. Siguiente tarea recomendada.

## Regla de incertidumbre

Si no existe certeza suficiente sobre una decisión técnica, editorial o de seguridad,
no inventar una solución. Explicar la duda, proponer alternativas y pedir confirmación.