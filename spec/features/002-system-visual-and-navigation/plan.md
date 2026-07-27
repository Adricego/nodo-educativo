# Feature 002 — Sistema visual y navegación

## Estado

Approved

## Especificación relacionada

- `spec/features/002-system-visual-and-navigation/spec.md`
- Estado de la especificación: Approved

## Objetivo del plan

Definir el enfoque técnico para implementar el sistema visual y la navegación
de Nodo Educativo sin desarrollar todavía contenido editorial real ni
funcionalidades avanzadas.

La implementación debe establecer:

- un layout global;
- un header reutilizable;
- una navegación principal responsive;
- un footer reutilizable;
- una base visual basada en la paleta Frosted aura;
- una tipografía global;
- rutas placeholder válidas;
- componentes mínimos reutilizables;
- accesibilidad básica;
- validaciones técnicas, visuales y funcionales.

## Base técnica confirmada

El proyecto ya dispone de:

- Next.js con App Router;
- TypeScript en modo estricto;
- Tailwind CSS;
- ESLint;
- estructura basada en `src/app`;
- Node.js 22 mediante nvm dentro de WSL;
- despliegue de Vercel conectado a `main`.

Esta feature debe trabajar sobre la base existente y no reemplazarla.

## Principios de implementación

### Reutilización

Los elementos compartidos entre páginas deben implementarse como componentes
reutilizables.

No se debe repetir manualmente el header, el footer, la navegación ni la
estructura general de contenido en cada ruta.

### Separación de responsabilidades

Cada componente debe tener una responsabilidad principal clara.

La información de navegación debe estar separada de su presentación visual para
evitar duplicaciones entre la navegación de escritorio, el menú móvil y el
footer.

### Componentes de servidor por defecto

Los componentes deben mantenerse como Server Components siempre que no
necesiten:

- estado interno;
- eventos del navegador;
- efectos;
- acceso reactivo a la ruta actual;
- APIs exclusivas del navegador.

La interactividad del menú móvil y la identificación de la ruta activa deben
aislarse dentro del componente de navegación.

### Dependencias mínimas

No se instalarán nuevas dependencias para:

- navegación;
- iconos;
- accesibilidad;
- estilos;
- animaciones;
- manejo de estado;
- pruebas de interfaz.

Se utilizarán las capacidades existentes de React, Next.js, Tailwind CSS y CSS.

### Implementación gradual

La feature debe construirse desde la base visual hacia las páginas:

1. inspección de la base existente;
2. configuración de tokens visuales y tipografía;
3. creación de componentes reutilizables;
4. configuración del layout global;
5. implementación de la navegación responsive;
6. creación de páginas y placeholders;
7. verificación técnica, visual y accesible.

## Inspección previa

Antes de modificar archivos se debe revisar:

- versión instalada de Next.js;
- versión instalada de React;
- versión instalada de Tailwind CSS;
- scripts disponibles en `package.json`;
- contenido actual de `src/app/layout.tsx`;
- contenido actual de `src/app/globals.css`;
- contenido actual de `src/app/page.tsx`;
- configuración de alias en `tsconfig.json`;
- reglas existentes en `AGENTS.md`;
- convenciones documentadas del proyecto;
- estado de la rama de trabajo;
- estado del repositorio mediante Git.

Si la estructura real del proyecto difiere de la descrita en este plan, se debe
detener la implementación y actualizar primero este documento.

## Arquitectura propuesta

La estructura prevista para la feature es la siguiente:

    src/
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── noticias/
    │   │   └── page.tsx
    │   ├── herramientas/
    │   │   └── page.tsx
    │   ├── gadgets/
    │   │   └── page.tsx
    │   └── quienes-somos/
    │       └── page.tsx
    ├── components/
    │   ├── layout/
    │   │   ├── site-header.tsx
    │   │   ├── main-navigation.tsx
    │   │   └── site-footer.tsx
    │   └── ui/
    │       ├── container.tsx
    │       ├── site-brand.tsx
    │       ├── skip-link.tsx
    │       ├── cta-link.tsx
    │       └── section-placeholder.tsx
    └── config/
        └── site-navigation.ts

La estructura podrá ajustarse únicamente si la inspección de la base existente
demuestra una incompatibilidad o si aparece una alternativa claramente más
simple.

Cualquier cambio relevante en esta arquitectura debe documentarse primero en
este archivo antes de implementarse.

## Archivos existentes que se modificarán

### `src/app/layout.tsx`

Responsabilidades:

- mantener el documento raíz de la aplicación;
- establecer el idioma del documento en español;
- configurar la tipografía global;
- incorporar el enlace para saltar al contenido;
- incorporar el header global;
- renderizar el contenido principal;
- incorporar el footer global;
- aplicar una estructura vertical que permita mantener el footer correctamente
  posicionado;
- actualizar los metadatos generales del sitio.

El layout debe incluir una única región `main`, identificable como destino del
enlace para saltar al contenido.

El layout debe envolver todas las rutas públicas incluidas en esta feature.

No se agregarán en esta etapa:

- metadatos avanzados;
- Open Graph;
- Twitter Cards;
- sitemap;
- robots personalizados;
- datos estructurados;
- analítica;
- scripts externos.

### `src/app/globals.css`

Responsabilidades:

- mantener las directivas globales requeridas por la versión instalada de
  Tailwind CSS;
- definir los tokens cromáticos de Frosted aura;
- establecer estilos base de fondo, texto y tipografía;
- establecer estilos globales de foco visible;
- definir reglas generales de legibilidad;
- evitar desplazamiento horizontal accidental;
- respetar la preferencia de reducción de movimiento;
- mantener una base visual consistente;
- permitir que los colores puedan modificarse en el futuro sin buscar valores
  hexadecimales dispersos.

Este archivo no debe transformarse en una colección de estilos particulares
para cada componente.

Los estilos específicos deben mantenerse cerca de la estructura del componente,
principalmente mediante utilidades de Tailwind CSS.

### `src/app/page.tsx`

La página temporal creada durante la Feature 001 será reemplazada por una
portada estructural mínima.

Debe incluir:

- un título principal;
- una descripción breve de Nodo Educativo;
- una explicación general del propósito del portal;
- uno o más enlaces hacia las secciones principales;
- contenido estático, claro y honesto;
- una jerarquía visual consistente con el sistema definido.

No debe incluir:

- noticias ficticias;
- estadísticas inventadas;
- herramientas simuladas;
- gadgets simulados;
- formularios;
- llamados a suscripción;
- publicidad;
- contenido dinámico.

No se construirá todavía una portada editorial completa.

## Archivos nuevos de rutas

### `src/app/noticias/page.tsx`

Debe mostrar:

- encabezado “Noticias”;
- descripción breve de la futura sección;
- mensaje explícito de que el contenido se encuentra en preparación;
- enlace para regresar al inicio o continuar navegando.

No debe mostrar noticias simuladas.

### `src/app/herramientas/page.tsx`

Debe mostrar:

- encabezado “Herramientas”;
- descripción breve de la futura sección;
- mensaje explícito de que el contenido se encuentra en preparación;
- enlace para regresar al inicio o continuar navegando.

No debe mostrar un catálogo ficticio.

### `src/app/gadgets/page.tsx`

Debe mostrar:

- encabezado “Gadgets”;
- descripción breve de la futura sección;
- mensaje explícito de que el contenido se encuentra en preparación;
- enlace para regresar al inicio o continuar navegando.

No debe mostrar:

- productos ficticios;
- precios;
- recomendaciones;
- enlaces de compra;
- contenido patrocinado.

### `src/app/quienes-somos/page.tsx`

Debe mostrar:

- encabezado “Quiénes somos”;
- descripción institucional mínima;
- propósito general de Nodo Educativo;
- público al que se dirige el portal;
- aclaración de que el proyecto se encuentra en desarrollo.

No debe inventar:

- integrantes;
- organizaciones asociadas;
- alianzas;
- instituciones patrocinadoras;
- datos de contacto no confirmados;
- información institucional inexistente.

## Configuración de navegación

### `src/config/site-navigation.ts`

Debe contener una única fuente de verdad para las opciones principales de
navegación.

Cada elemento debe incluir como mínimo:

- etiqueta visible;
- ruta interna.

La configuración inicial será:

| Etiqueta | Ruta |
|---|---|
| Inicio | `/` |
| Noticias | `/noticias` |
| Herramientas | `/herramientas` |
| Gadgets | `/gadgets` |
| Quiénes somos | `/quienes-somos` |

El header, la navegación de escritorio, el menú móvil y el footer deben
reutilizar esta configuración.

No deben existir listas independientes con los mismos enlaces en distintos
componentes.

No se incluirán enlaces cuya ruta no exista.

Los datos de navegación deben estar tipados y ser estáticos.

## Componentes de layout

### `src/components/layout/site-header.tsx`

Componente responsable de la cabecera global.

Debe:

- utilizar el elemento semántico `header`;
- contener la identidad textual de Nodo Educativo;
- incorporar la navegación principal;
- utilizar el contenedor común;
- mantener una estructura consistente en todas las páginas;
- funcionar como Server Component;
- permitir una distribución responsive entre identidad y navegación.

No debe manejar directamente el estado del menú móvil.

No debe incluir:

- buscador;
- autenticación;
- botones de usuario;
- publicidad;
- enlaces sociales;
- controles ajenos al alcance.

### `src/components/layout/main-navigation.tsx`

Componente responsable de la navegación de escritorio y móvil.

Será el único componente principal de esta feature que necesitará ejecutarse
en el cliente.

La ejecución en cliente se justifica por:

- el estado abierto o cerrado del menú móvil;
- los eventos de interacción;
- la detección reactiva de la ruta actual;
- el cierre del menú al cambiar de ruta.

Debe:

- consumir los enlaces desde `site-navigation.ts`;
- mostrar navegación horizontal en escritorio;
- mostrar un botón de menú en pantallas pequeñas;
- mostrar el menú móvil dentro del flujo del documento;
- indicar la ruta activa;
- cerrar el menú al seleccionar un enlace;
- cerrar el menú mediante la tecla Escape;
- cerrar el menú cuando cambie la ruta;
- devolver el foco al botón del menú cuando se cierre mediante Escape;
- comunicar el estado mediante atributos accesibles;
- mantener un foco visible;
- conservar un orden lógico de navegación por teclado.

El menú móvil será un panel desplegable sencillo debajo del header.

No se implementará como:

- modal;
- drawer lateral;
- overlay de pantalla completa;
- menú flotante independiente;
- navegación con animaciones complejas.

Esta decisión evita incorporar manejo de:

- bloqueo de scroll;
- atrapamiento de foco;
- overlays;
- portales;
- restauración compleja del foco;
- cierre al hacer clic fuera;
- animaciones fuera del alcance.

### `src/components/layout/site-footer.tsx`

Componente responsable del pie de página global.

Debe:

- utilizar el elemento semántico `footer`;
- mostrar el nombre Nodo Educativo;
- mostrar una descripción institucional breve;
- reutilizar la configuración de navegación;
- mostrar el año correspondiente;
- utilizar el contenedor común;
- funcionar como Server Component;
- mantener una estructura legible en móvil y escritorio.

No debe incluir:

- redes sociales inexistentes;
- enlaces legales inexistentes;
- publicidad;
- formularios;
- newsletter;
- datos de contacto no confirmados.

## Componentes de interfaz

### `src/components/ui/container.tsx`

Debe proporcionar:

- ancho máximo coherente;
- centrado horizontal;
- márgenes laterales responsive;
- reutilización en header, contenido principal y footer.

Debe aceptar contenido mediante `children`.

Debe permitir clases adicionales cuando exista una necesidad concreta, sin
convertirse en un componente excesivamente configurable.

### `src/components/ui/site-brand.tsx`

Debe representar la identidad textual provisional de Nodo Educativo.

Debe:

- mostrar el nombre del portal;
- enlazar a la página de inicio cuando corresponda;
- admitir su uso en header y footer;
- mantener una presentación coherente;
- no depender de un archivo de imagen;
- no simular un logotipo gráfico definitivo.

La identidad inicial será un wordmark textual.

### `src/components/ui/skip-link.tsx`

Debe proporcionar un enlace que permita saltar directamente al contenido
principal.

Debe:

- ser uno de los primeros elementos interactivos del documento;
- permanecer visualmente oculto cuando no tenga foco;
- mostrarse claramente cuando reciba foco;
- apuntar al identificador de la región `main`;
- utilizar un texto comprensible en español.

### `src/components/ui/cta-link.tsx`

Debe representar enlaces destacados con apariencia visual consistente.

Debe:

- utilizar navegación mediante enlaces;
- tener estados normal, hover, focus y active;
- permitir reutilización en la portada y páginas placeholder;
- utilizar una combinación cromática con contraste suficiente;
- conservar semántica de enlace cuando su acción sea navegar.

No debe convertirse todavía en:

- un sistema completo de botones;
- un componente con numerosas variantes;
- una librería de diseño;
- un componente polimórfico complejo.

### `src/components/ui/section-placeholder.tsx`

Debe proporcionar una estructura reutilizable para las secciones que todavía no
tienen contenido real.

Debe aceptar como mínimo:

- título;
- descripción;
- mensaje de estado.

Será utilizado, como mínimo, por:

- Noticias;
- Herramientas;
- Gadgets.

La página Quiénes somos podrá utilizarlo solamente si su contenido permanece
suficientemente simple.

No es obligatorio forzar su reutilización cuando eso reduzca la claridad
semántica de una página.

## Estrategia de navegación

Los enlaces internos deben utilizar el mecanismo de navegación proporcionado
por Next.js.

La ruta activa se determinará dentro de `main-navigation.tsx`.

El enlace activo debe:

- distinguirse visualmente;
- utilizar `aria-current="page"`;
- conservar contraste suficiente;
- conservar foco visible;
- no depender únicamente del color.

Para la ruta de inicio, el estado activo debe aplicarse solamente cuando la ruta
actual sea exactamente `/`.

Para las demás rutas, la comparación debe identificar correctamente la sección
correspondiente.

La navegación debe evitar coincidencias incorrectas entre rutas.

No se necesita:

- navegación programática;
- redirecciones;
- middleware;
- rutas protegidas;
- parámetros dinámicos;
- rutas paralelas;
- interceptación de rutas.

## Estrategia responsive

La implementación seguirá un enfoque mobile-first.

### Pantallas pequeñas

En pantallas pequeñas debe existir:

- identidad del sitio visible;
- botón de menú visible;
- navegación horizontal oculta;
- menú desplegable debajo del header;
- enlaces organizados verticalmente;
- contenido con márgenes laterales reducidos;
- áreas de activación táctil suficientes;
- ausencia de superposiciones;
- ausencia de desplazamiento horizontal accidental.

### Pantallas medianas y grandes

En pantallas medianas y grandes debe existir:

- navegación principal visible horizontalmente;
- botón de menú móvil oculto;
- contenido limitado por un ancho máximo;
- header distribuido entre identidad y navegación;
- separación clara entre los elementos;
- footer organizado con espacio suficiente entre sus grupos.

La transición principal entre la navegación móvil y la navegación de escritorio
utilizará el breakpoint responsive existente de Tailwind más cercano a 768
píxeles.

No se crearán breakpoints personalizados salvo que la verificación visual
demuestre que son necesarios.

### Anchos de referencia

La interfaz se verificará como mínimo en:

- 320 px;
- 375 px;
- 768 px;
- 1024 px;
- 1440 px.

Los anchos son referencias de prueba y no deben convertirse necesariamente en
breakpoints personalizados.

## Estrategia visual

### Paleta Frosted aura

Los tokens visuales iniciales serán:

| Token conceptual | Valor |
|---|---|
| Principal | `#5C7E8F` |
| Principal oscuro | `#3F5F70` |
| Principal activo | `#334E5C` |
| Gris medio | `#A2A2A2` |
| Fondo secundario | `#D4DDE2` |
| Fondo principal | `#FFFFFF` |
| Texto principal | `#1F2937` |
| Texto secundario | `#475569` |
| Foco | `#5C7E8F` |

Los colores deben definirse como variables CSS con nombres semánticos.

Los componentes deben consumir roles visuales y no repetir valores
hexadecimales arbitrariamente.

### Uso cromático

- El blanco será la superficie principal.
- El gris azulado claro se utilizará para fondos suaves, divisores y bordes.
- El azul grisáceo representará la identidad principal.
- Las variantes oscuras se utilizarán cuando exista texto blanco.
- El gris medio no se utilizará como texto principal sobre fondo blanco.
- El texto principal utilizará un tono oscuro con contraste suficiente.
- Los estados activos y de foco deben ser reconocibles sin depender únicamente
  del color.
- El color principal no se utilizará como fondo de texto blanco pequeño cuando
  el contraste no resulte suficiente.
- No se incorporarán colores ajenos a la paleta sin una justificación
  documentada.

### Tipografía

Se utilizará Geist Sans como tipografía principal.

La fuente debe configurarse globalmente mediante el mecanismo de fuentes que ya
utiliza o admite Next.js dentro del proyecto.

La jerarquía mínima incluirá:

- un título principal por página;
- títulos de sección;
- subtítulos cuando sean necesarios;
- párrafos de contenido;
- texto secundario;
- enlaces de navegación;
- enlaces destacados.

No se incorporará una segunda familia tipográfica en esta feature.

El texto de lectura debe mantener:

- tamaño legible;
- interlineado suficiente;
- ancho de línea controlado;
- contraste adecuado;
- separación clara entre párrafos.

### Espaciado y composición

La interfaz debe priorizar:

- espacios en blanco;
- bloques de contenido legibles;
- ancho de lectura controlado;
- separación clara entre header, contenido y footer;
- consistencia en márgenes y paddings;
- ausencia de decoración innecesaria;
- jerarquía visual simple.

No se desarrollará todavía un design system completo con escalas exhaustivas
de:

- espaciado;
- sombras;
- radios;
- elevación;
- tamaños;
- variantes;
- animaciones.

## Estrategia de accesibilidad

La implementación debe incorporar:

- idioma del documento configurado como español;
- landmarks semánticos;
- un único `main` por página;
- enlace para saltar al contenido;
- navegación identificable;
- botón móvil con nombre accesible;
- `aria-expanded` en el control del menú;
- `aria-controls` asociado al panel móvil;
- `aria-current="page"` para el enlace activo;
- navegación completa mediante teclado;
- cierre del menú con Escape;
- retorno del foco al botón cuando corresponda;
- foco visible;
- orden lógico de tabulación;
- jerarquía correcta de encabezados;
- ausencia de enlaces vacíos;
- ausencia de controles representados únicamente por iconos sin etiqueta;
- enlaces distinguibles del texto normal;
- contraste visual suficiente;
- ausencia de información comunicada únicamente mediante color;
- respeto por `prefers-reduced-motion` cuando exista movimiento.

No se agregarán atributos ARIA cuando exista un elemento HTML semántico que
resuelva correctamente la misma necesidad.

No se incorporará una biblioteca externa de accesibilidad.

## Límite entre servidor y cliente

Los siguientes elementos permanecerán como Server Components:

- layout raíz;
- header;
- footer;
- contenedor;
- identidad textual;
- enlace para saltar al contenido;
- enlace destacado;
- páginas;
- placeholder reutilizable.

`main-navigation.tsx` será Client Component porque necesita:

- estado;
- eventos;
- detección reactiva de la ruta;
- efectos relacionados con el cierre del menú.

No se debe convertir todo el layout o todo el header en Client Component
únicamente para soportar el menú móvil.

El límite de cliente debe mantenerse lo más pequeño posible.

## Datos y contenido

Todos los datos utilizados por esta feature serán estáticos y locales.

No habrá:

- solicitudes HTTP;
- consumo de APIs;
- conexión a una base de datos;
- variables de entorno nuevas;
- datos provenientes de CMS;
- contenido generado dinámicamente;
- persistencia de estado;
- almacenamiento local;
- cookies;
- datos de usuario.

La navegación se almacenará en un arreglo tipado local.

Los textos placeholder se escribirán directamente en las páginas o se pasarán
como propiedades al componente reutilizable.

La información visible debe ser honesta y no debe simular contenido real.

## Metadatos

El layout raíz debe establecer metadatos generales mínimos:

- título del sitio;
- descripción breve;
- idioma del documento.

Las páginas placeholder podrán utilizar el título global sin incorporar todavía
una estrategia SEO individual.

Quedan fuera de esta feature:

- sitemap;
- robots personalizados;
- Open Graph avanzado;
- Twitter Cards;
- datos estructurados;
- metadatos obtenidos desde CMS;
- estrategia de palabras clave;
- SEO editorial.

## Estrategia de validación

### Validación inicial del entorno

Antes de implementar se debe verificar:

- versión activa de Node.js;
- rama actual;
- estado limpio o comprendido del repositorio;
- instalación correcta de dependencias;
- scripts disponibles;
- funcionamiento inicial del proyecto.

### Validación estática

Se ejecutará:

- revisión de formato de Git;
- ESLint;
- compilación de producción.

Los comandos mínimos serán:

    git diff --check
    npm run lint
    npm run build

Todos deben finalizar correctamente antes de considerar terminada la feature.

### Validación de rutas

Se revisarán manualmente:

- `/`;
- `/noticias`;
- `/herramientas`;
- `/gadgets`;
- `/quienes-somos`.

Cada ruta debe:

- cargar correctamente;
- mostrar el header;
- mostrar el contenido principal;
- mostrar el footer;
- no producir un error 404;
- no mostrar errores relevantes en la consola;
- mantener la navegación funcional;
- identificar correctamente su estado activo.

### Validación responsive

Se revisará la interfaz al menos en:

- 320 px;
- 375 px;
- 768 px;
- 1024 px;
- 1440 px.

Se comprobará:

- navegación utilizable;
- ausencia de desplazamiento horizontal accidental;
- ausencia de elementos superpuestos;
- legibilidad del contenido;
- márgenes adecuados;
- funcionamiento del menú móvil;
- transición correcta entre navegación móvil y de escritorio;
- tamaños táctiles suficientes;
- distribución correcta del header;
- distribución correcta del footer.

### Validación mediante teclado

Se comprobará la siguiente secuencia:

1. acceder al enlace para saltar al contenido;
2. comprobar que el enlace se vuelve visible al recibir foco;
3. saltar correctamente al contenido principal;
4. recorrer los controles del header;
5. abrir el menú móvil mediante teclado;
6. recorrer todos los enlaces del menú;
7. cerrar el menú mediante Escape;
8. comprobar el retorno del foco;
9. activar una ruta;
10. continuar navegando hacia el contenido;
11. acceder a los enlaces del footer.

### Validación visual

Se comprobará:

- aplicación consistente de Frosted aura;
- contraste de texto y fondos;
- jerarquía de títulos;
- consistencia de espaciado;
- diferenciación de hover, focus y active;
- consistencia entre todas las rutas;
- ausencia de colores arbitrarios;
- legibilidad de los placeholders;
- coherencia entre header y footer.

### Validación de accesibilidad básica

Se comprobará manualmente:

- estructura semántica;
- presencia de un único `main`;
- presencia del enlace para saltar;
- jerarquía de encabezados;
- nombres accesibles;
- estado expandido del menú;
- estado activo de navegación;
- foco visible;
- interacción por teclado;
- ausencia de información dependiente solo del color.

### Validación de consola

Durante la revisión manual no deben aparecer:

- errores de React;
- errores de hidratación;
- errores de claves;
- errores de rutas;
- solicitudes fallidas inesperadas;
- advertencias relevantes relacionadas con los componentes creados.

### Validación de producción

Después de una compilación correcta se debe ejecutar localmente la versión de
producción.

Se deben revisar nuevamente las rutas principales en esa modalidad.

Los comandos previstos serán:

    npm run build
    npm run start

La validación de producción debe realizarse antes de abrir la pull request.

## Pruebas automatizadas

Esta feature no incorporará todavía un framework nuevo de pruebas de
componentes o pruebas end-to-end.

La decisión se debe a que:

- el proyecto no dispone actualmente de infraestructura de pruebas de interfaz;
- agregarla ampliaría considerablemente el alcance;
- la feature puede verificarse inicialmente mediante lint, build y una revisión
  manual estructurada;
- no se deben instalar nuevas dependencias sin una necesidad previamente
  acordada.

Esta decisión implica una limitación:

La navegación responsive y la interacción mediante teclado no tendrán todavía
una prueba automatizada de regresión.

La limitación debe quedar registrada y podrá abordarse en una futura feature de
calidad técnica.

La ausencia de pruebas automatizadas no elimina la obligación de ejecutar todas
las validaciones manuales descritas en este plan.

## Rendimiento

La implementación debe evitar:

- dependencias innecesarias;
- JavaScript de cliente fuera de la navegación;
- imágenes decorativas pesadas;
- fuentes adicionales;
- animaciones complejas;
- solicitudes externas;
- duplicación de componentes;
- estructuras visuales excesivamente profundas;
- lógica de estado innecesaria.

La navegación y las páginas placeholder deben mantenerse ligeras.

La mayor parte de la interfaz debe renderizarse como componentes de servidor.

## Seguridad y privacidad

La feature no procesa entradas del usuario ni datos personales.

No se agregarán:

- formularios;
- cookies;
- almacenamiento local;
- autenticación;
- variables secretas;
- scripts externos;
- analítica;
- publicidad;
- seguimiento de usuarios;
- conexión a servicios externos.

Los destinos de navegación estarán definidos localmente y no dependerán de
valores proporcionados por usuarios.

No se deben introducir secretos ni archivos `.env`.

## Archivos que no deben modificarse

Salvo que exista una necesidad técnica previamente documentada, no deben
modificarse:

- configuración de Vercel;
- archivos de variables de entorno;
- configuración de base de datos;
- archivos relacionados con CMS;
- workflows de despliegue;
- documentación de features anteriores;
- dependencias del proyecto;
- archivos de seguridad;
- archivos de constitución;
- configuración de dominio.

Si durante la implementación aparece una necesidad de modificar alguno de estos
elementos, la tarea debe detenerse y el alcance debe revisarse.

## Riesgos y mitigaciones

### Riesgo: exceso de componentes pequeños

Mitigación:

Crear componentes solamente cuando exista reutilización real, responsabilidad
global o necesidad de aislar interactividad.

No abstraer estructuras utilizadas una sola vez sin una razón clara.

### Riesgo: duplicación de enlaces

Mitigación:

Mantener una única configuración de navegación reutilizada por header, menú
móvil y footer.

### Riesgo: bajo contraste de Frosted aura

Mitigación:

Utilizar las variantes oscuras para fondos con texto blanco y reservar los tonos
claros para superficies, bordes y divisores.

Verificar manualmente las combinaciones de texto y fondo.

### Riesgo: convertir demasiado código en cliente

Mitigación:

Aislar estado, eventos y detección de ruta dentro de
`main-navigation.tsx`.

Mantener el resto de los componentes como Server Components.

### Riesgo: menú móvil abierto después de navegar

Mitigación:

Cerrar el menú al seleccionar un enlace y al detectar un cambio de ruta.

### Riesgo: pérdida del foco al cerrar el menú

Mitigación:

Cuando el menú se cierre mediante Escape, devolver el foco al botón que lo
controla.

### Riesgo: contenido placeholder confundido con contenido real

Mitigación:

Indicar de forma explícita que cada sección se encuentra en preparación.

No utilizar tarjetas, fechas, autores o datos que puedan interpretarse como
contenido editorial publicado.

### Riesgo: enlaces rotos

Mitigación:

Crear todas las rutas aprobadas antes de dar por finalizada la navegación.

Revisar manualmente cada enlace visible.

### Riesgo: inconsistencias visuales

Mitigación:

Centralizar los colores mediante variables CSS y reutilizar el contenedor y los
componentes globales.

### Riesgo: expansión del alcance

Mitigación:

Verificar cada cambio contra las exclusiones de `spec.md` antes de
implementarlo.

No incorporar funcionalidades no descritas en la especificación.

### Riesgo: ausencia de pruebas automatizadas

Mitigación:

Utilizar una pauta manual reproducible y registrar la incorporación de pruebas
de interfaz como una mejora futura.

## Secuencia general de implementación

### Fase 1 — Inspección

Revisar:

- base técnica;
- archivos existentes;
- versiones instaladas;
- scripts;
- convenciones;
- estado del repositorio.

No se modifica código durante la inspección inicial.

### Fase 2 — Fundamentos visuales

Configurar:

- tipografía;
- tokens cromáticos;
- fondo general;
- colores de texto;
- foco visible;
- reducción de movimiento;
- reglas globales de legibilidad.

### Fase 3 — Componentes reutilizables

Crear:

- contenedor;
- identidad textual;
- enlace para saltar al contenido;
- enlace destacado;
- placeholder reutilizable.

### Fase 4 — Configuración de navegación

Crear:

- fuente única de enlaces;
- tipado de elementos de navegación;
- rutas aprobadas.

### Fase 5 — Layout global

Crear e integrar:

- header;
- footer;
- estructura principal;
- metadatos mínimos;
- tipografía global;
- skip link.

### Fase 6 — Navegación

Implementar:

- navegación de escritorio;
- botón móvil;
- panel desplegable;
- estado abierto y cerrado;
- ruta activa;
- cierre al navegar;
- cierre con Escape;
- retorno del foco;
- atributos accesibles.

### Fase 7 — Rutas

Actualizar o crear:

- portada;
- Noticias;
- Herramientas;
- Gadgets;
- Quiénes somos.

### Fase 8 — Verificación

Ejecutar:

- revisión de Git;
- lint;
- build;
- servidor de producción;
- revisión de rutas;
- revisión responsive;
- revisión mediante teclado;
- revisión de accesibilidad básica;
- revisión de consola.

La división exacta de estas fases en tareas pequeñas y verificables se realizará
en `tasks.md`.

## Trazabilidad con la especificación

| Requisito de `spec.md` | Enfoque del plan |
|---|---|
| Layout global | `src/app/layout.tsx` |
| Header | `site-header.tsx` |
| Navegación principal | `main-navigation.tsx` |
| Navegación centralizada | `site-navigation.ts` |
| Footer | `site-footer.tsx` |
| Paleta Frosted aura | Variables CSS en `globals.css` |
| Tipografía base | Geist Sans configurada globalmente |
| Componentes reutilizables | `src/components/layout` y `src/components/ui` |
| Diseño responsive | Enfoque mobile-first |
| Navegación móvil | Panel desplegable debajo del header |
| Accesibilidad básica | Semántica, skip link, teclado, foco y atributos de estado |
| Rutas válidas | Cinco páginas bajo `src/app` |
| Páginas placeholder | `section-placeholder.tsx` y rutas correspondientes |
| Estado activo | Ruta actual identificada en `main-navigation.tsx` |
| Sin dependencias nuevas | Uso exclusivo del stack existente |
| Sin CMS ni base de datos | Datos estáticos y locales |
| Sin cambios de Vercel | Configuración de despliegue sin modificaciones |
| Verificación técnica | `git diff --check`, lint y build |
| Verificación responsive | Revisión manual entre 320 y 1440 px |

## Decisiones técnicas aprobadas

Se aprueban las siguientes decisiones:

1. Mantener una única configuración centralizada de navegación.
2. Utilizar componentes de servidor por defecto.
3. Mantener `main-navigation.tsx` como el único Client Component principal
   de esta feature.
4. Utilizar un menú móvil desplegable debajo del header.
5. No utilizar modal, drawer lateral ni overlay para la navegación móvil.
6. No instalar nuevas dependencias.
7. Utilizar variables CSS semánticas para la paleta Frosted aura.
8. Utilizar Geist Sans como tipografía principal.
9. Crear páginas placeholder para evitar enlaces rotos.
10. No agregar todavía un framework de pruebas de interfaz.
11. Realizar una validación manual estructurada de responsive, teclado y
    accesibilidad.
12. Mantener nombres de archivos y componentes en inglés.
13. Mantener los textos visibles de la interfaz en español.
14. Incorporar solamente metadatos generales mínimos.
15. Mantener fuera de alcance cualquier funcionalidad no aprobada en
    `spec.md`.


## Aprobación del plan

Este plan fue revisado y aprobado como base técnica para la Feature 002:
Sistema visual y navegación.

Cualquier modificación relevante en arquitectura, alcance, dependencias,
navegación o sistema visual debe actualizar primero `spec.md` o `plan.md`,
según corresponda, antes de modificar el código.