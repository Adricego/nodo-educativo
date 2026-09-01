# Feature 002 — Sistema visual y navegación

## Estado

Approved

## Documentos relacionados

- `spec/features/002-system-visual-and-navigation/spec.md`
- `spec/features/002-system-visual-and-navigation/plan.md`

Estados requeridos antes de comenzar la implementación:

- `spec.md`: Approved
- `plan.md`: Approved
- `tasks.md`: Approved

## Objetivo

Dividir la implementación de la Feature 002 en tareas pequeñas, ordenadas y
verificables.

La ejecución debe realizarse una tarea a la vez. Una tarea solamente puede
marcarse como completada cuando:

- se realizaron las acciones descritas;
- se ejecutaron sus verificaciones;
- no se detectaron errores relevantes;
- el resultado cumple `spec.md` y `plan.md`;
- el desarrollador revisó y comprendió los cambios.

## Convenciones del checklist

- `[ ]`: tarea pendiente.
- `[x]`: tarea completada y verificada.
- `[P]`: tarea que puede realizarse en paralelo cuando sus dependencias estén
  completadas.
- Cada identificador `TXXX` es único.
- Las tareas deben ejecutarse en el orden definido, salvo aquellas marcadas con
  `[P]`.
- No se deben combinar varias tareas en una sola instrucción al agente.
- No se debe avanzar a la siguiente fase si existe una verificación pendiente.

## Reglas de ejecución

Antes de cada tarea:

1. leer la tarea completa;
2. revisar sus dependencias;
3. confirmar que no amplía el alcance;
4. pedir al agente que implemente solamente esa tarea;
5. revisar los archivos modificados;
6. ejecutar las verificaciones indicadas;
7. marcar la tarea como completada únicamente después de validar el resultado.

Reglas generales:

- ejecutar una tarea a la vez;
- no modificar archivos fuera del alcance de la tarea;
- detenerse si aparece una contradicción con `spec.md` o `plan.md`;
- actualizar primero la documentación si surge una decisión nueva;
- no marcar una tarea como completada sin evidencia de verificación.

---

# Fase 1 — Preparación e inspección

## T001 — Confirmar rama y estado inicial

- [x] **T001 — Confirmar rama de trabajo y estado del repositorio**

### Objetivo

Asegurar que la implementación comienza desde la rama correcta y sobre una base
conocida.

### Acciones

- confirmar que Node.js 22 está activo;
- confirmar que la rama actual corresponde a la Feature 002;
- revisar si existen cambios pendientes;
- comprobar que `spec.md` y `plan.md` están guardados;
- no modificar código de la aplicación.

### Comandos

```bash
nvm use 22
node --version
git branch --show-current
git status --short
```

### Resultado esperado

- la versión de Node.js comienza con `v22`;
- la rama actual es
  `feature/002-system-visual-and-navigation`;
- todos los cambios visibles son conocidos;
- no existen modificaciones inesperadas.

### Dependencias

Ninguna.

---

## T002 — Inspeccionar la base técnica

- [X] **T002 — Inspeccionar versiones, scripts y configuración existente**

### Objetivo

Confirmar que la base real coincide con lo descrito en `plan.md`.

### Acciones

Revisar:

- `package.json`;
- versiones de Next.js, React y Tailwind CSS;
- scripts disponibles;
- `tsconfig.json`;
- `src/app/layout.tsx`;
- `src/app/globals.css`;
- `src/app/page.tsx`;
- `AGENTS.md`;
- archivos de constitución y convenciones relevantes.

No modificar archivos durante esta tarea.

### Comandos

```bash
cat package.json
npm ls next react react-dom tailwindcss --depth=0
cat tsconfig.json
sed -n '1,240p' src/app/layout.tsx
sed -n '1,320p' src/app/globals.css
sed -n '1,260p' src/app/page.tsx
sed -n '1,260p' AGENTS.md
```

### Verificación

Confirmar que:

- TypeScript continúa en modo estricto;
- App Router sigue utilizando `src/app`;
- existen scripts para `dev`, `lint`, `build` y `start`;
- no se detectan incompatibilidades con la arquitectura aprobada;
- no se necesitan dependencias nuevas.

### Condición de detención

Si la estructura real contradice `plan.md`, no continuar con T003.

En ese caso se debe actualizar primero `plan.md` y solicitar una nueva
aprobación.

### Dependencias

T001.

---

## T003 — Verificar el funcionamiento previo

- [x] **T003 — Confirmar que la aplicación funciona antes de modificarla**

### Objetivo

Evitar atribuir a la Feature 002 errores que ya existían anteriormente.

### Acciones

- instalar dependencias solamente si no están disponibles;
- ejecutar lint;
- ejecutar build;
- iniciar el servidor local;
- revisar la página inicial existente.

### Comandos

```bash
npm install
npm run lint
npm run build
npm run dev
```

`npm install` solamente debe ejecutarse cuando `node_modules` no esté disponible
o las dependencias no estén instaladas correctamente.

### Verificación

Confirmar que antes de la implementación:

- lint finaliza correctamente;
- build finaliza correctamente;
- la página inicial carga;
- no aparecen errores relevantes en la consola del navegador.

### Registro

Si existe un error previo, debe documentarse antes de continuar.

### Dependencias

T002.

---

## T004 — Crear la estructura de carpetas

- [X] **T004 — Crear las carpetas aprobadas para componentes y configuración**

### Objetivo

Preparar la estructura definida en `plan.md` sin crear todavía la implementación
completa de los componentes.

### Carpetas previstas

```text
src/components/layout/
src/components/ui/
src/config/
src/app/noticias/
src/app/herramientas/
src/app/aliados-del-escritorio/
src/app/quienes-somos/
```

### Verificación

```bash
find src \
  -maxdepth 3 \
  -type d \
  | sort
```

Confirmar que:

- las carpetas fueron creadas en las ubicaciones previstas;
- no se modificaron rutas existentes innecesariamente;
- no se crearon carpetas fuera de la arquitectura aprobada.

### Dependencias

T003.

---

## T005 — Configurar la base visual y tipográfica

- [x] **T005 — Configurar Frosted aura, tipografía y estilos globales**

### Objetivo

Establecer la base visual común antes de construir componentes.

### Archivos previstos

- `src/app/globals.css`
- `src/app/layout.tsx`, solamente en lo relacionado con la fuente global si es
  necesario.

### Acciones

Implementar:

- variables CSS semánticas para Frosted aura;
- fondo principal;
- color de texto principal;
- color de texto secundario;
- color de superficie secundaria;
- variantes principal, oscura y activa;
- estilos de foco visible;
- reglas generales de legibilidad;
- respeto por `prefers-reduced-motion`;
- Geist Sans como tipografía principal;
- prevención de desplazamiento horizontal accidental.

### Restricciones

- no repetir colores hexadecimales arbitrariamente;
- no crear todavía estilos particulares de páginas;
- no agregar una segunda tipografía;
- no instalar dependencias;
- no reemplazar las directivas requeridas por Tailwind.

### Verificación

```bash
git diff -- src/app/globals.css src/app/layout.tsx
git diff --check
npm run lint
```

También se debe revisar manualmente que:

- los nombres de las variables sean semánticos;
- las variantes oscuras se utilicen para texto blanco;
- `#A2A2A2` no se defina como texto principal sobre blanco;
- no se hayan agregado estilos fuera del alcance.

### Dependencias

T004.

---

## T006 — Crear la configuración de navegación

- [x] **T006 — Crear una fuente única de enlaces de navegación**

### Objetivo

Evitar duplicar las rutas entre header, menú móvil y footer.

### Archivo previsto

- `src/config/site-navigation.ts`

### Rutas requeridas

| Etiqueta | Ruta |
|---|---|
| Inicio | `/` |
| Noticias | `/noticias` |
| Herramientas digitales | `/herramientas` |
| Aliados del escritorio | `/aliados-del-escritorio` |
| Quiénes somos | `/quienes-somos` |

### Acciones

- crear un arreglo tipado;
- incluir solamente etiqueta y ruta necesarias;
- exportar la configuración para su reutilización;
- evitar lógica de presentación en este archivo.

### Verificación

```bash
test -f src/config/site-navigation.ts && echo "Archivo encontrado"
git diff -- src/config/site-navigation.ts
git diff --check
npm run lint
```

Confirmar que:

- existe una sola lista de navegación;
- no existen rutas inexistentes;
- los textos visibles están en español;
- el archivo no contiene JSX ni estado.

### Dependencias

T004.

---

# Fase 2 — Componentes reutilizables de interfaz

Las tareas T007 a T011 pueden ejecutarse en paralelo después de completar T005
y T006, siempre que cada tarea sea revisada por separado.

## T007 — Crear el contenedor global

- [x] **T007 [P] — Crear `container.tsx`**

### Objetivo

Proporcionar un ancho máximo y márgenes responsive consistentes.

### Archivo previsto

- `src/components/ui/container.tsx`

### Requisitos

El componente debe:

- aceptar `children`;
- centrar horizontalmente el contenido;
- definir márgenes laterales mobile-first;
- definir un ancho máximo coherente;
- permitir clases adicionales cuando sean necesarias;
- permanecer como Server Component;
- evitar una API excesivamente configurable.

### Verificación

```bash
test -f src/components/ui/container.tsx && echo "Archivo encontrado"
git diff -- src/components/ui/container.tsx
git diff --check
npm run lint
```

### Dependencias

T005.

---

## T008 — Crear la identidad textual

- [x] **T008 [P] — Crear `site-brand.tsx`**

### Objetivo

Representar el wordmark provisional de Nodo Educativo.

### Archivo previsto

- `src/components/ui/site-brand.tsx`

### Requisitos

El componente debe:

- mostrar “Nodo Educativo”;
- poder enlazar al inicio;
- ser reutilizable en header y footer;
- conservar semántica de enlace cuando corresponda;
- no utilizar una imagen;
- no presentarse como logotipo gráfico definitivo;
- permanecer como Server Component.

### Verificación

```bash
test -f src/components/ui/site-brand.tsx && echo "Archivo encontrado"
git diff -- src/components/ui/site-brand.tsx
git diff --check
npm run lint
```

### Dependencias

T005.

---

## T009 — Crear el enlace para saltar al contenido

- [x] **T009 [P] — Crear `skip-link.tsx`**

### Objetivo

Permitir que una persona que utiliza teclado omita la navegación repetida.

### Archivo previsto

- `src/components/ui/skip-link.tsx`

### Requisitos

El componente debe:

- enlazar al contenido principal;
- ser uno de los primeros controles del documento;
- permanecer oculto visualmente cuando no tiene foco;
- mostrarse claramente cuando recibe foco;
- utilizar texto visible en español;
- mantener contraste suficiente;
- permanecer como Server Component.

### Verificación

```bash
test -f src/components/ui/skip-link.tsx && echo "Archivo encontrado"
git diff -- src/components/ui/skip-link.tsx
git diff --check
npm run lint
```

La interacción completa se validará después de integrarlo en el layout.

### Dependencias

T005.

---

## T010 — Crear el enlace destacado

- [x] **T010 [P] — Crear `cta-link.tsx`**

### Objetivo

Proporcionar un enlace destacado reutilizable para navegación interna.

### Archivo previsto

- `src/components/ui/cta-link.tsx`

### Requisitos

El componente debe:

- conservar semántica de enlace;
- aceptar un destino interno;
- aceptar contenido visible;
- utilizar la paleta Frosted aura;
- incorporar estados hover, focus y active;
- usar una variante oscura cuando exista texto blanco;
- mantener contraste suficiente;
- no convertirse en un sistema genérico de botones.

### Verificación

```bash
test -f src/components/ui/cta-link.tsx && echo "Archivo encontrado"
git diff -- src/components/ui/cta-link.tsx
git diff --check
npm run lint
```

### Dependencias

T005.

---

## T011 — Crear el placeholder reutilizable

- [x] **T011 [P] — Crear `section-placeholder.tsx`**

### Objetivo

Evitar duplicar la estructura de las páginas que todavía no tienen contenido.

### Archivo previsto

- `src/components/ui/section-placeholder.tsx`

### Propiedades mínimas

- título;
- descripción;
- mensaje de estado.

### Requisitos

El componente debe:

- mantener una jerarquía correcta de encabezados;
- comunicar explícitamente que la sección está en preparación;
- permitir un enlace de retorno o continuación;
- permanecer como Server Component;
- no simular contenido real;
- no incorporar lógica de navegación móvil.

### Verificación

```bash
test -f src/components/ui/section-placeholder.tsx \
  && echo "Archivo encontrado"
git diff -- src/components/ui/section-placeholder.tsx
git diff --check
npm run lint
```

### Dependencias

T005 y T010.

---

# Fase 3 — Navegación y layout global

## T012 — Implementar la navegación principal

- [x] **T012 — Crear `main-navigation.tsx`**

### Objetivo

Implementar la navegación de escritorio y móvil dentro de un único componente
interactivo.

### Archivo previsto

- `src/components/layout/main-navigation.tsx`

### Requisitos de escritorio

- mostrar todos los enlaces principales;
- organizar los enlaces horizontalmente;
- ocultar el botón móvil;
- identificar la ruta activa;
- utilizar `aria-current="page"`.

### Requisitos móviles

- mostrar un botón de menú;
- ocultar la navegación horizontal;
- desplegar los enlaces debajo del header;
- utilizar `aria-expanded`;
- utilizar `aria-controls`;
- cerrar el menú al seleccionar un enlace;
- cerrar el menú cuando cambie la ruta;
- cerrar el menú con Escape;
- devolver el foco al botón cuando se cierre con Escape.

### Restricciones

- debe ser Client Component;
- debe consumir `site-navigation.ts`;
- no debe implementar modal;
- no debe implementar drawer lateral;
- no debe bloquear el scroll;
- no debe utilizar overlay;
- no debe instalar librerías;
- no debe convertir otros componentes en cliente sin necesidad.

### Verificación

```bash
test -f src/components/layout/main-navigation.tsx \
  && echo "Archivo encontrado"
git diff -- src/components/layout/main-navigation.tsx
git diff --check
npm run lint
```

La validación de interacción completa se realizará en T021 y T022.

### Dependencias

T006.

---

## T013 — Crear el header global

- [x] **T013 — Crear `site-header.tsx`**

### Objetivo

Construir la cabecera común del portal.

### Archivo previsto

- `src/components/layout/site-header.tsx`

### Requisitos

El header debe:

- utilizar el elemento `header`;
- utilizar el contenedor común;
- incorporar `site-brand.tsx`;
- incorporar `main-navigation.tsx`;
- mantener una distribución responsive;
- permanecer como Server Component;
- mostrarse de forma consistente en todas las rutas.

### Exclusiones

No debe incluir:

- buscador;
- autenticación;
- perfil;
- publicidad;
- redes sociales;
- formularios;
- enlaces inexistentes.

### Verificación

```bash
test -f src/components/layout/site-header.tsx \
  && echo "Archivo encontrado"
git diff -- src/components/layout/site-header.tsx
git diff --check
npm run lint
```

### Dependencias

T007, T008 y T012.

---

## T014 — Crear el footer global

- [x] **T014 — Crear `site-footer.tsx`**

### Objetivo

Construir el pie de página compartido.

### Archivo previsto

- `src/components/layout/site-footer.tsx`

### Requisitos

El footer debe:

- utilizar el elemento `footer`;
- utilizar el contenedor común;
- mostrar Nodo Educativo;
- mostrar una descripción institucional breve;
- reutilizar `site-navigation.ts`;
- incluir el año correspondiente;
- mantener una estructura responsive;
- permanecer como Server Component.

### Exclusiones

No debe incluir:

- redes sociales inexistentes;
- enlaces legales inexistentes;
- datos de contacto no confirmados;
- newsletter;
- publicidad;
- formularios.

### Verificación

```bash
test -f src/components/layout/site-footer.tsx \
  && echo "Archivo encontrado"
git diff -- src/components/layout/site-footer.tsx
git diff --check
npm run lint
```

### Dependencias

T006, T007 y T008.

---

## T015 — Integrar el layout raíz

- [x] **T015 — Integrar skip link, header, main y footer en `layout.tsx`**

### Objetivo

Aplicar la estructura global a todas las rutas públicas.

### Archivo previsto

- `src/app/layout.tsx`

### Requisitos

El layout debe:

- establecer `lang="es"`;
- mantener la configuración global de Geist Sans;
- mostrar el skip link antes de la navegación;
- incorporar el header;
- incluir un único `main`;
- asignar al `main` el identificador esperado por el skip link;
- renderizar `children` dentro del contenido principal;
- incorporar el footer;
- mantener una estructura vertical de página completa;
- establecer metadatos generales mínimos.

### Restricciones

- no convertir el layout en Client Component;
- no agregar SEO avanzado;
- no incorporar scripts externos;
- no agregar analítica;
- no duplicar `main` dentro del layout.

### Verificación

```bash
git diff -- src/app/layout.tsx
git diff --check
npm run lint
npm run build
```

Revisar en el navegador que:

- header y footer aparecen;
- existe un único `main`;
- el layout carga sin errores;
- no existe error de hidratación.

### Dependencias

T009, T013 y T014.

---

# Fase 4 — Páginas y rutas

Las tareas T017, T018 y T019 pueden ejecutarse en paralelo después de T011 y
T015.

## T016 — Actualizar la portada

- [x] **T016 — Reemplazar la página temporal por una portada estructural**

### Archivo previsto

- `src/app/page.tsx`

### Requisitos

La portada debe incluir:

- un único `h1`;
- nombre y propósito de Nodo Educativo;
- descripción orientada a docentes de Chile;
- presentación breve de las futuras secciones;
- enlaces internos destacados;
- contenido estático y honesto;
- estructura responsive;
- paleta y tipografía definidas.

### Exclusiones

No debe incluir:

- noticias ficticias;
- autores;
- fechas inventadas;
- estadísticas;
- catálogo simulado;
- newsletter;
- publicidad;
- formularios.

### Verificación

```bash
git diff -- src/app/page.tsx
git diff --check
npm run lint
```

Revisar manualmente:

- jerarquía de encabezados;
- legibilidad;
- funcionamiento de enlaces;
- ausencia de contenido ficticio.

### Dependencias

T010 y T015.

---

## T017 — Crear la página Noticias

- [x] **T017 [P] — Crear `/noticias`**

### Archivo previsto

- `src/app/noticias/page.tsx`

### Requisitos

Debe mostrar:

- título “Noticias”;
- descripción de la futura sección;
- mensaje explícito de contenido en preparación;
- enlace para regresar o continuar navegando;
- layout global compartido.

No debe mostrar noticias simuladas.

### Verificación

```bash
test -f src/app/noticias/page.tsx && echo "Archivo encontrado"
git diff -- src/app/noticias/page.tsx
git diff --check
npm run lint
```

### Dependencias

T011 y T015.

---

## T018 — Crear la página Herramientas digitales

- [x] **T018 [P] — Crear `/herramientas`**

### Archivo previsto

- `src/app/herramientas/page.tsx`

### Requisitos

Debe mostrar:

- título “Herramientas digitales”;
- descripción de la futura sección;
- mensaje explícito de contenido en preparación;
- enlace para regresar o continuar navegando;
- layout global compartido.

No debe mostrar un catálogo ficticio.

### Verificación

```bash
test -f src/app/herramientas/page.tsx && echo "Archivo encontrado"
git diff -- src/app/herramientas/page.tsx
git diff --check
npm run lint
```

### Dependencias

T011 y T015.

---

## T019 — Crear la página Aliados del escritorio

- [x] **T019 [P] — Crear `/aliados-del-escritorio`**

### Archivo previsto

- `src/app/aliados-del-escritorio/page.tsx`

### Requisitos

Debe mostrar:

- título “Aliados del escritorio”;
- descripción de la futura sección;
- mensaje explícito de contenido en preparación;
- enlace para regresar o continuar navegando;
- layout global compartido.

No debe mostrar:

- productos ficticios;
- precios;
- enlaces de compra;
- recomendaciones;
- publicidad.

### Verificación

```bash
test -f src/app/aliados-del-escritorio/page.tsx && echo "Archivo encontrado"
git diff -- src/app/aliados-del-escritorio/page.tsx
git diff --check
npm run lint
```

### Dependencias

T011 y T015.

---

## T020 — Crear la página Quiénes somos

- [x] **T020 — Crear `/quienes-somos`**

### Archivo previsto

- `src/app/quienes-somos/page.tsx`

### Requisitos

Debe mostrar:

- título “Quiénes somos”;
- descripción institucional mínima;
- propósito de Nodo Educativo;
- público principal;
- aclaración de que el proyecto está en desarrollo;
- enlace para continuar navegando;
- layout global compartido.

No debe inventar:

- integrantes;
- cargos;
- alianzas;
- patrocinadores;
- instituciones asociadas;
- datos de contacto.

### Verificación

```bash
test -f src/app/quienes-somos/page.tsx && echo "Archivo encontrado"
git diff -- src/app/quienes-somos/page.tsx
git diff --check
npm run lint
```

### Dependencias

T010 y T015.

---

# Fase 5 — Verificación funcional, responsive y accesible

## T021 — Verificar navegación y rutas

- [x] **T021 — Validar todos los enlaces y estados activos**

### Objetivo

Confirmar que la navegación funciona en las cinco rutas aprobadas.

### Rutas

- `/`
- `/noticias`
- `/herramientas`
- `/aliados-del-escritorio`
- `/quienes-somos`

### Acciones

- iniciar el servidor local;
- visitar cada ruta;
- comprobar el estado activo;
- probar navegación desde header;
- probar navegación desde menú móvil;
- probar navegación desde footer;
- comprobar que el menú se cierra al navegar.

### Comandos

```bash
npm run dev
```

Con el servidor en ejecución:

```bash
for path in / /noticias /herramientas /aliados-del-escritorio /quienes-somos; do
  curl -s -o /dev/null \
    -w "%{http_code} ${path}\n" \
    "http://localhost:3000${path}"
done
```

### Resultado esperado

Todas las rutas deben responder con estado `200`.

### Verificación manual

- ningún enlace produce 404;
- Inicio solo está activo en `/`;
- cada sección identifica correctamente su ruta;
- `aria-current="page"` aparece en el enlace correspondiente;
- el footer utiliza las mismas rutas que el header.

### Dependencias

T016, T017, T018, T019 y T020.

---

## T022 — Verificar diseño responsive

- [x] **T022 — Revisar la interfaz entre 320 y 1440 píxeles**

### Anchos obligatorios

- 320 px;
- 375 px;
- 768 px;
- 1024 px;
- 1440 px.

### Revisar en cada ancho

- header;
- identidad del sitio;
- botón móvil;
- menú desplegable;
- navegación de escritorio;
- portada;
- páginas placeholder;
- footer;
- márgenes;
- tamaño del texto;
- áreas táctiles;
- distribución vertical.

### Criterios

- no existe desplazamiento horizontal accidental;
- no existen elementos superpuestos;
- los enlaces permanecen utilizables;
- el menú móvil aparece cuando corresponde;
- la navegación horizontal aparece cuando corresponde;
- los textos no quedan cortados;
- el footer mantiene una estructura comprensible.

### Verificación adicional

Ejecutar en la consola del navegador:

```javascript
document.documentElement.scrollWidth ===
  document.documentElement.clientWidth
```

El resultado esperado es `true` en cada ancho revisado.

### Dependencias

T021.

---

## T023 — Verificar navegación por teclado

- [x] **T023 — Validar teclado, foco y menú móvil**

### Secuencia obligatoria

1. recargar la página;
2. presionar Tab;
3. comprobar que aparece el enlace para saltar;
4. activarlo;
5. comprobar que el foco llega al contenido principal;
6. recorrer los controles del header;
7. abrir el menú móvil con Enter o Espacio;
8. recorrer sus enlaces;
9. cerrar el menú con Escape;
10. comprobar que el foco vuelve al botón;
11. abrir nuevamente el menú;
12. seleccionar una ruta;
13. comprobar que el menú se cierra;
14. continuar hasta los enlaces del footer.

### Criterios

- todos los controles son alcanzables;
- el orden del foco es lógico;
- el foco es visible;
- no existe atrapamiento de foco;
- Escape cierra el menú;
- el botón comunica su estado;
- no se necesita ratón para navegar.

### Dependencias

T022.

---

## T024 — Verificar accesibilidad y contraste básicos

- [x] **T024 — Auditar semántica, contenido y uso de color**

### Revisar

- `lang="es"`;
- un único `main`;
- presencia de `header`, `nav` y `footer`;
- un `h1` por página;
- orden lógico de encabezados;
- nombres accesibles;
- `aria-expanded`;
- `aria-controls`;
- `aria-current`;
- contraste de texto;
- enlaces distinguibles;
- información no dependiente solo del color;
- ausencia de enlaces vacíos;
- ausencia de controles sin etiqueta.

### Paleta

Confirmar que:

- el color principal claro no se usa como fondo de texto blanco pequeño cuando
  no alcanza el contraste requerido;
- las variantes oscuras se utilizan en enlaces destacados;
- el gris medio no se utiliza como texto principal;
- el foco resulta visible sobre todos los fondos.

### Verificación

Se puede utilizar la auditoría de accesibilidad de las herramientas de
desarrollo del navegador como apoyo.

La auditoría automática no reemplaza la revisión manual.

### Dependencias

T023.

---

## T025 — Ejecutar validación técnica final

- [x] **T025 — Ejecutar formato, lint y build**

### Comandos

```bash
git diff --check
npm run lint
npm run build
```

### Resultado esperado

- `git diff --check` no produce salida;
- lint finaliza sin errores;
- build finaliza correctamente;
- todas las rutas aparecen en la compilación;
- no existen errores de TypeScript.

### Condición de detención

No continuar con T026 si alguno de los comandos falla.

El error debe corregirse y los tres comandos deben ejecutarse nuevamente.

### Dependencias

T024.

---

## T026 — Verificar la versión local de producción

- [x] **T026 — Ejecutar y revisar la aplicación compilada**

### Objetivo

Confirmar que el comportamiento no depende únicamente del servidor de
desarrollo.

### Comandos

```bash
npm run build
npm run start
```

### Revisar

- `/`;
- `/noticias`;
- `/herramientas`;
- `/aliados-del-escritorio`;
- `/quienes-somos`;
- navegación móvil;
- navegación de escritorio;
- estado activo;
- consola del navegador.

### Criterios

No deben aparecer:

- errores de React;
- errores de hidratación;
- errores de claves;
- errores de rutas;
- solicitudes fallidas inesperadas;
- advertencias relevantes introducidas por la feature.

### Dependencias

T025.

---

# Fase 6 — Auditoría de alcance y entrega

## T027 — Auditar cumplimiento de `spec.md` y `plan.md`

- [x] **T027 — Revisar trazabilidad y exclusiones**

### Objetivo

Confirmar que la implementación corresponde exactamente a lo aprobado.

### Verificar que se implementó

- layout global;
- header;
- navegación principal;
- menú móvil;
- footer;
- Frosted aura;
- Geist Sans;
- componentes mínimos;
- responsive;
- accesibilidad básica;
- cinco rutas válidas;
- placeholders explícitos.

### Verificar que no se implementó

- CMS;
- Sanity;
- noticias reales;
- catálogo real;
- dispositivos o accesorios reales;
- buscador;
- autenticación;
- formularios;
- AdSense;
- base de datos;
- cambios de dominio;
- cambios de configuración de Vercel;
- analítica;
- dependencias nuevas;
- pruebas automatizadas fuera del alcance.

### Comandos de apoyo

```bash
git diff --name-only
git diff --stat
git status --short
```

### Resultado esperado

Todos los archivos modificados deben poder relacionarse con una tarea de este
documento.

### Dependencias

T026.

---

## T028 — Actualizar documentación y completar checklist

- [x] **T028 — Registrar el resultado final de la feature**

### Acciones

- marcar solamente las tareas verificadas como `[x]`;
- actualizar `tasks.md`;
- registrar cualquier desviación aprobada del plan;
- confirmar que `spec.md` y `plan.md` continúan reflejando la implementación;
- actualizar documentación mínima de ejecución solo si fuera necesario;
- no reescribir documentación de features anteriores.

### Verificación

```bash
git diff -- \
  spec/features/002-system-visual-and-navigation/spec.md \
  spec/features/002-system-visual-and-navigation/plan.md \
  spec/features/002-system-visual-and-navigation/tasks.md
```

Confirmar que:

- no quedan tareas marcadas sin evidencia;
- las decisiones técnicas relevantes están documentadas;
- no existe contradicción entre los tres documentos.

### Dependencias

T027.

---

## T029 — Revisar cambios y crear el commit final

- [x] **T029 — Preparar y crear el commit de la Feature 002**

### Revisión previa

```bash
git status
git diff --check
git diff --stat
git diff
npm run lint
npm run build
```

### Acciones

- revisar todos los archivos;
- confirmar que no existen secretos;
- confirmar que no se modificaron archivos fuera del alcance;
- agregar los cambios al staging;
- revisar nuevamente el staging;
- crear un commit descriptivo.

### Comandos previstos

```bash
git add \
  src/app \
  src/components \
  src/config \
  spec/features/002-system-visual-and-navigation

git diff --cached --check
git diff --cached --stat
git diff --cached

git commit -m "feat: add visual system and site navigation"
```

### Resultado esperado

- el commit se crea correctamente;
- el mensaje representa la feature;
- no quedan cambios accidentales fuera del commit.

### Dependencias

T028.

---

## T030 — Crear pull request, revisar y cerrar la feature

- [x] **T030 — Publicar la rama y completar la integración**

### Acciones

- subir la rama;
- crear pull request hacia `main`;
- describir alcance, exclusiones y verificaciones;
- revisar el diff en GitHub;
- confirmar que los checks disponibles finalizan correctamente;
- realizar el merge después de la aprobación;
- actualizar `main` local;
- verificar la aplicación después del merge;
- eliminar la rama cuando corresponda.

### Comando para publicar la rama

```bash
git push -u origin feature/002-system-visual-and-navigation
```

### Contenido mínimo de la pull request

- objetivo de la Feature 002;
- componentes creados;
- rutas creadas;
- decisiones responsive;
- decisiones de accesibilidad;
- comandos de verificación ejecutados;
- confirmación de que no se agregaron dependencias;
- confirmación de que no se modificó Vercel;
- capturas de escritorio y móvil cuando sea útil.

### Verificación posterior al merge

```bash
git switch main
git pull --ff-only origin main
git status
npm run lint
npm run build
```

### Limpieza de rama local

Solamente después de confirmar el merge:

```bash
git branch -d feature/002-system-visual-and-navigation
```

### Verificación del despliegue existente

Se debe comprobar que el despliegue conectado a `main` refleja la nueva versión,
sin modificar la configuración de Vercel.

### Resultado esperado

- la pull request está fusionada;
- `main` contiene la Feature 002;
- lint y build continúan funcionando;
- el despliegue existente carga correctamente;
- la rama de trabajo puede cerrarse;
- la feature queda registrada como completada.

### Dependencias

T029.

---

# Criterio de finalización de la Feature 002

La Feature 002 se considerará terminada solamente cuando:

- T001 a T030 estén completadas;
- todas las rutas sean válidas;
- la navegación funcione en móvil y escritorio;
- la navegación pueda utilizarse mediante teclado;
- exista foco visible;
- el menú cierre correctamente;
- el estado activo sea correcto;
- la paleta Frosted aura se aplique de forma consistente;
- no exista desplazamiento horizontal accidental;
- no existan errores relevantes en consola;
- `git diff --check` finalice correctamente;
- `npm run lint` finalice correctamente;
- `npm run build` finalice correctamente;
- la versión de producción local haya sido revisada;
- la implementación respete las exclusiones;
- la documentación esté actualizada;
- la pull request haya sido revisada;
- los cambios hayan sido integrados a `main`;
- no se hayan realizado cambios de configuración en Vercel.


- ejecutar y verificar una tarea a la vez.