# Convenciones de desarrollo

## Lenguaje y tipado

- Usar TypeScript en modo estricto.
- No usar `any` salvo que exista una justificación explícita.
- Preferir tipos e interfaces claros para datos, props y respuestas externas.
- Evitar conversiones de tipo forzadas cuando puedan reemplazarse por validación.

## Nombres

- Usar `camelCase` para variables, funciones y propiedades.
- Usar `PascalCase` para componentes React, tipos e interfaces.
- Usar nombres descriptivos y evitar abreviaciones poco claras.
- Usar nombres en inglés para código técnico.
- Usar español para contenido editorial visible al usuario.

Ejemplos:

- `newsCard`
- `getFeaturedTools`
- `NewsArticle`
- `ToolCategory`

## Componentes y estructura

- Crear componentes pequeños y reutilizables.
- Evitar componentes con demasiadas responsabilidades.
- Mantener la lógica de presentación separada de la obtención de datos.
- Reutilizar componentes antes de duplicar estructuras visuales.
- No crear componentes genéricos prematuramente si solo se usarán una vez.

## Estilos

- Usar Tailwind CSS para estilos.
- Priorizar diseño responsive desde móvil hacia escritorio.
- Mantener contraste suficiente entre texto y fondo.
- Evitar estilos inline salvo casos justificados.
- Usar clases claras y mantener consistencia visual entre secciones.

## Accesibilidad

- Usar etiquetas HTML semánticas cuando correspondan.
- Toda imagen informativa debe incluir texto alternativo.
- Los botones deben tener texto o etiquetas comprensibles.
- La navegación debe funcionar mediante teclado.
- No depender solamente del color para transmitir información.

## Datos y contenido

- Mantener el contenido editorial separado del código.
- Identificar los datos temporales como `mock`, `sample` o `placeholder`.
- No presentar noticias, estadísticas, precios o fuentes ficticias como reales.
- Usar enlaces oficiales cuando se incorporen herramientas o gadgets reales.
- Incluir fecha de revisión en fichas de herramientas y gadgets.

## Pruebas y verificación

- Ejecutar `npm run lint` antes de cerrar una tarea.
- Ejecutar `npm run build` antes de un despliegue.
- Crear pruebas automatizadas cuando exista lógica relevante que las justifique.
- Verificar manualmente la interfaz en móvil y escritorio.
- Revisar con `git diff` los cambios antes de hacer commit.

## Git y cambios

- Mantener commits pequeños y con un propósito claro.
- Usar mensajes de commit descriptivos en inglés.
- No hacer commit de archivos `.env`, claves, tokens o datos sensibles.
- No modificar archivos no relacionados con el ticket actual.
- No instalar dependencias nuevas sin explicar su propósito.