# Feature 002 — Sistema visual y navegación

## Estado

Approved

## Contexto

Nodo Educativo es un portal web de noticias, herramientas y tecnología
educativa dirigido principalmente a docentes de Chile.

La Feature 001 estableció la base técnica del proyecto utilizando Next.js,
TypeScript estricto, Tailwind CSS, ESLint y App Router. El proyecto se
encuentra desplegado en Vercel desde la rama `main`.

Actualmente, el sitio cuenta con una página temporal funcional, pero todavía
no posee una estructura visual común, navegación principal ni componentes
base que permitan desarrollar las siguientes secciones de manera coherente.

## Problema

El proyecto no dispone todavía de un sistema visual inicial ni de una
estructura global reutilizable.

Si las próximas secciones se desarrollan sin esta base, podrían aparecer:

- estilos inconsistentes;
- navegación diferente entre páginas;
- componentes duplicados;
- problemas de visualización en dispositivos móviles;
- dificultades de accesibilidad;
- decisiones visuales contradictorias entre features.

## Objetivo

Crear la base visual y de navegación de Nodo Educativo mediante un layout
global reutilizable que incluya header, navegación principal, contenido
central y footer.

La feature debe establecer una primera versión coherente, responsive y
accesible del sistema visual del portal, sin desarrollar todavía contenido
editorial real ni funcionalidades avanzadas.

## Usuarios involucrados

### Visitante del portal

Necesita identificar el sitio, comprender sus secciones principales y
desplazarse entre ellas desde dispositivos móviles y de escritorio.

### Equipo de desarrollo

Necesita una base visual y estructural reutilizable para construir futuras
features sin duplicar estilos ni estructuras globales.

## Alcance

### Incluye

- Layout global del sitio.
- Header principal.
- Identificación textual de Nodo Educativo.
- Navegación principal.
- Navegación adaptada para dispositivos móviles.
- Footer global.
- Paleta visual inicial.
- Tipografía base.
- Jerarquía visual básica para títulos, textos y enlaces.
- Componentes reutilizables mínimos.
- Estados visuales para enlaces interactivos.
- Estado activo de navegación cuando corresponda.
- Diseño responsive.
- Accesibilidad básica.
- Rutas estructurales mínimas para validar la navegación.
- Contenido placeholder en secciones que todavía no poseen contenido real.

### Excluye

- CMS.
- Sanity.
- Noticias reales.
- Catálogo real de herramientas digitales.
- Contenido real de dispositivos o accesorios reales.
- Integraciones con fuentes externas.
- Buscador.
- Autenticación.
- Perfiles de usuario.
- Formularios.
- Newsletter.
- Google AdSense.
- Dominio personalizado.
- Base de datos.
- Cambios en la configuración de Vercel.
- Panel de administración.
- Analítica avanzada.
- Sistema visual definitivo de marca.
- Logotipo gráfico definitivo.

## Arquitectura de navegación inicial

La navegación principal debe contener las siguientes opciones:

| Etiqueta | Destino |
|---|---|
| Inicio | `/` |
| Noticias | `/noticias` |
| Herramientas digitales | `/herramientas` |
| Aliados del escritorio | `/aliados-del-escritorio` |
| Quiénes somos | `/quienes-somos` |

Todas las opciones deben conducir a una ruta válida.

Las secciones que todavía no cuenten con contenido real deben utilizar
contenido placeholder claramente identificado y no deben simular información
real.

## Layout global

Todas las páginas públicas incluidas en esta feature deben compartir la
siguiente estructura:

1. Enlace para saltar directamente al contenido principal.
2. Header.
3. Navegación principal.
4. Área de contenido principal.
5. Footer.

El layout debe mantener una estructura visual coherente entre todas las rutas.

## Header

El header debe:

- mostrar el nombre “Nodo Educativo”;
- permitir regresar a la página de inicio;
- contener o dar acceso a la navegación principal;
- distinguir visualmente la identidad del sitio;
- funcionar correctamente en dispositivos móviles y de escritorio;
- utilizar elementos semánticos apropiados;
- permitir la navegación mediante teclado.

En esta etapa se utilizará una identificación textual o wordmark simple.
No se desarrollará un logotipo gráfico definitivo.

## Navegación principal

En escritorio, las opciones principales deben estar visibles dentro del header.

En pantallas pequeñas, la navegación puede presentarse mediante un control
desplegable.

El control móvil debe:

- indicar claramente su propósito;
- poder abrirse y cerrarse con teclado;
- comunicar su estado abierto o cerrado a tecnologías de asistencia;
- cerrar o reorganizar correctamente su contenido al cambiar de ruta;
- no impedir el acceso al contenido principal.

Los enlaces deben incluir estados visuales reconocibles para:

- estado normal;
- hover;
- foco;
- estado activo.

## Footer

El footer debe incluir como mínimo:

- nombre del portal;
- breve descripción institucional;
- navegación secundaria o repetición de las secciones principales;
- año y texto de derechos o identificación del proyecto.

No deben incluirse enlaces sociales, legales o institucionales que todavía no
existan realmente.

## Dirección visual inicial

La interfaz debe transmitir una apariencia:

- moderna;
- educativa;
- profesional;
- clara;
- confiable;
- sobria;
- legible.

La base visual debe favorecer la lectura de contenidos extensos y permitir que
futuras noticias, recursos y herramientas se integren sin rediseñar la
estructura general.

Esta paleta corresponde a una versión inicial y no constituye todavía una
identidad de marca definitiva.

## Paleta visual inicial

La identidad visual inicial se basará en la paleta “Frosted aura”,
compuesta por tonos fríos, neutros y claros.

La paleta busca transmitir una apariencia:

- moderna;
- tecnológica;
- profesional;
- clara;
- sobria;
- confiable.

Los colores de referencia se complementan con tonos funcionales más oscuros
para asegurar una jerarquía visual adecuada y un contraste suficiente.

| Rol visual | Valor propuesto | Uso principal |
|---|---|---|
| Color principal | `#5C7E8F` | Identidad visual, elementos decorativos y destacados |
| Color principal oscuro | `#3F5F70` | Botones, enlaces y elementos que requieran mayor contraste |
| Color principal activo | `#334E5C` | Estados hover, active y navegación seleccionada |
| Gris medio | `#A2A2A2` | Elementos secundarios o estados deshabilitados |
| Fondo secundario | `#D4DDE2` | Fondos suaves, divisores y secciones diferenciadas |
| Fondo principal | `#FFFFFF` | Superficies y fondo general |
| Texto principal | `#1F2937` | Títulos y contenido principal |
| Texto secundario | `#475569` | Descripciones y contenido secundario |
| Indicador de foco | `#5C7E8F` | Contorno visible de elementos enfocados |

### Reglas de uso de color

- `#5C7E8F` no debe utilizarse como fondo de texto blanco pequeño.
- Para botones o elementos con texto blanco debe utilizarse preferentemente
  `#3F5F70` o un tono más oscuro.
- `#A2A2A2` no debe utilizarse como color principal de texto sobre blanco.
- `#D4DDE2` debe utilizarse principalmente como fondo, divisor o borde.
- El texto principal debe utilizar un tono oscuro que mantenga una lectura clara.
- Los enlaces no deben distinguirse únicamente mediante color.
- Los estados hover, focus y active deben ser visualmente diferenciables.
- Ninguna información debe comunicarse exclusivamente mediante el color.

Esta paleta constituye una base visual inicial y no representa todavía una
identidad de marca definitiva.

## Tipografía base

La interfaz debe utilizar una tipografía sans serif moderna y legible.

La primera opción propuesta es Geist Sans, acompañada de una cadena de
tipografías de respaldo del sistema.

La jerarquía tipográfica debe distinguir claramente:

- título principal;
- títulos de sección;
- subtítulos;
- texto de contenido;
- texto secundario;
- enlaces;
- elementos de navegación.

El texto de contenido debe mantener un tamaño base legible y un interlineado
mínimo aproximado de 1.5.

## Componentes reutilizables mínimos

La feature debe establecer componentes reutilizables para representar, como
mínimo:

- contenedor general de contenido;
- identidad textual del sitio;
- header;
- navegación principal;
- elemento de navegación;
- control de navegación móvil;
- footer;
- enlace destacado o llamada a la acción;
- enlace para saltar al contenido;
- estilos base de títulos y textos.

La ubicación exacta, nombre técnico y estructura de archivos de estos
componentes se definirá en `plan.md`.

## Diseño responsive

La interfaz debe funcionar desde un ancho mínimo de 320 píxeles.

Debe verificarse al menos en los siguientes anchos de referencia:

- 320 px;
- 375 px;
- 768 px;
- 1024 px;
- 1440 px.

En todos ellos:

- no debe existir desplazamiento horizontal accidental;
- el texto debe permanecer legible;
- la navegación debe poder utilizarse;
- los elementos no deben superponerse;
- el contenido debe conservar márgenes adecuados;
- el header y footer deben mantener una estructura comprensible.

Los elementos interactivos deben disponer de un área de activación suficiente
para su uso táctil.

## Accesibilidad básica

La feature debe incluir:

- estructura semántica con `header`, `nav`, `main` y `footer`;
- enlace para saltar al contenido principal;
- navegación completa mediante teclado;
- foco visible;
- orden lógico del foco;
- nombres accesibles para controles interactivos;
- estado accesible del menú móvil;
- jerarquía correcta de encabezados;
- contraste visual suficiente;
- enlaces distinguibles del texto normal;
- ausencia de información comunicada únicamente mediante color;
- textos alternativos para cualquier imagen incorporada;
- respeto por preferencias de reducción de movimiento cuando se utilicen
  animaciones.

## Requisitos funcionales

### FR-001 — Layout global

Todas las rutas incluidas en la feature deben utilizar una estructura global
compuesta por header, contenido principal y footer.

### FR-002 — Identidad del sitio

El header debe mostrar el nombre “Nodo Educativo” y permitir volver al inicio.

### FR-003 — Navegación de escritorio

La navegación principal debe mostrar las secciones definidas cuando exista
espacio horizontal suficiente.

### FR-004 — Navegación móvil

En pantallas pequeñas, la navegación debe reorganizarse en una interfaz
utilizable y accesible.

### FR-005 — Enlaces válidos

Todos los enlaces internos visibles deben apuntar a rutas existentes y no deben
producir errores 404.

### FR-006 — Estado activo

La navegación debe permitir identificar visualmente la sección actual cuando
corresponda.

### FR-007 — Footer global

Todas las rutas incluidas deben mostrar el footer común.

### FR-008 — Sistema visual

Los colores, tipografías, espacios y estados interactivos deben seguir una base
visual común.

### FR-009 — Reutilización

Las estructuras compartidas no deben duplicarse de forma independiente en cada
página.

### FR-010 — Responsive

La interfaz debe conservar su funcionalidad y legibilidad entre 320 y
1440 píxeles.

### FR-011 — Accesibilidad

La navegación y los controles deben poder utilizarse mediante teclado y mostrar
un foco visible.

### FR-012 — Contenido provisional

Las rutas sin contenido real deben mostrar información provisional explícita,
sin inventar noticias, herramientas digitales o dispositivos o accesorios.

## Criterios de aceptación

### AC-001 — Estructura global

Dado que una persona visita cualquiera de las rutas incluidas,
cuando la página termina de cargar,
entonces debe visualizar header, contenido principal y footer.

### AC-002 — Navegación de escritorio

Dado que la página se visualiza en una pantalla de escritorio,
cuando la persona observa el header,
entonces debe encontrar todas las opciones principales de navegación.

### AC-003 — Navegación móvil

Dado que la página se visualiza en una pantalla pequeña,
cuando la persona activa el control de navegación,
entonces debe poder acceder a todas las secciones y cerrar nuevamente el menú.

### AC-004 — Navegación mediante teclado

Dado que una persona utiliza solamente el teclado,
cuando recorre el sitio,
entonces debe poder acceder al contenido principal y a todos los enlaces
interactivos siguiendo un orden comprensible.

### AC-005 — Foco visible

Dado que un elemento interactivo recibe foco,
entonces debe existir una indicación visual clara de ese estado.

### AC-006 — Enlaces válidos

Dado que una persona selecciona cualquier enlace interno visible,
entonces debe acceder a una ruta existente sin recibir un error 404.

### AC-007 — Responsive

Dado que el sitio se revisa entre 320 y 1440 píxeles,
entonces no debe presentar desplazamiento horizontal accidental,
superposiciones ni contenido inaccesible.

### AC-008 — Consistencia visual

Dado que una persona navega entre las rutas incluidas,
entonces debe encontrar una paleta, tipografía, espaciado y jerarquía visual
coherentes.

### AC-009 — Contenido provisional

Dado que una sección todavía no posee contenido real,
cuando una persona accede a ella,
entonces debe encontrar un mensaje explícito que indique que la sección está
en preparación.

### AC-010 — Calidad técnica

Cuando se complete la implementación,
entonces los comandos de lint y build deben finalizar correctamente y no deben
existir errores visibles en la consola del navegador.

### AC-011 — Respeto del alcance

Cuando se revise la feature,
entonces no deben haberse agregado CMS, Sanity, base de datos, autenticación,
formularios, buscador, publicidad ni cambios de configuración de Vercel.

## Restricciones técnicas

- Mantener Next.js con App Router.
- Mantener TypeScript en modo estricto.
- Mantener Tailwind CSS.
- Mantener ESLint.
- Mantener Node.js 22 como versión de trabajo.
- No agregar nuevas dependencias sin una justificación aprobada.
- No utilizar `any` sin una justificación explícita.
- No modificar la configuración de despliegue de Vercel.
- No incorporar datos sensibles ni variables de entorno nuevas.
- No desarrollar funcionalidades fuera del alcance aprobado.

## Definición de terminado

La Feature 002 se considerará terminada cuando:

- todos los requisitos funcionales estén implementados;
- todos los criterios de aceptación hayan sido verificados;
- todas las rutas de navegación sean válidas;
- el sitio funcione en móvil y escritorio;
- la navegación pueda utilizarse mediante teclado;
- exista foco visible;
- no haya desplazamiento horizontal accidental;
- no existan errores de consola relevantes;
- `npm run lint` finalice correctamente;
- `npm run build` finalice correctamente;
- la documentación de la feature esté actualizada;
- los cambios hayan sido revisados mediante pull request;
- la feature haya sido integrada a `main`.

## Decisiones aprobadas

- Se utilizará el nombre textual “Nodo Educativo” como identidad inicial.
- No se creará todavía un logotipo gráfico definitivo.
- Noticias, Herramientas digitales, Aliados del escritorio y Quiénes somos tendrán páginas placeholder
  mínimas para evitar enlaces rotos.
- La paleta visual inicial estará basada en “Frosted aura”.
- La paleta podrá evolucionar mediante una futura feature de identidad de marca.
- La navegación móvil será simple y no dependerá de animaciones complejas.