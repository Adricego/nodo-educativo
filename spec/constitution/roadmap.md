# Roadmap de Nodo Educativo

## Objetivo del MVP

Publicar una primera versión funcional de Nodo Educativo que permita:

- Presentar noticias educativas de Chile.
- Mostrar herramientas tecnológicas útiles para docentes.
- Mostrar gadgets con potencial pedagógico.
- Administrar contenido mediante un CMS.
- Tener una base técnica preparada para SEO y despliegue en Vercel.

## Estado actual

Proyecto en fase de definición y preparación técnica.

## Orden de desarrollo

### 001 - Fundación del proyecto

Crear la base técnica del proyecto.

Incluye:

- Proyecto Next.js.
- TypeScript.
- Tailwind CSS.
- Configuración inicial de Git.
- Estructura de carpetas.
- Página temporal inicial.
- Configuración para trabajar localmente.
- Primer despliegue de prueba en Vercel.

### 002 - Sistema visual y navegación

Definir la estructura general de la interfaz.

Incluye:

- Header.
- Menú de navegación.
- Footer.
- Paleta visual inicial.
- Tipografía.
- Componentes reutilizables.
- Diseño responsive.
- Base de accesibilidad.

### 003 - Modelos de contenido y CMS

Integrar Sanity CMS y definir cómo se almacenará el contenido editorial.

Incluye:

- Configuración de Sanity.
- Modelo de noticia.
- Modelo de herramienta docente.
- Modelo de gadget.
- Categorías.
- Estados de publicación.
- Campos de fecha de revisión.
- Borradores y publicaciones.

### 004 - Página principal

Construir la página de inicio del portal.

Incluye:

- Noticia destacada.
- Últimas noticias.
- Herramienta destacada.
- Gadget destacado.
- Accesos a secciones principales.
- Contenido temporal o editorial según disponibilidad del CMS.

### 005 - Noticias Chile

Crear la sección de noticias educativas de Chile.

Incluye:

- Listado de noticias.
- Tarjetas de noticias.
- Página individual de noticia.
- Categorías.
- Fuente original.
- Fecha de publicación.
- Fecha de actualización.
- Enlaces compartibles.

### 006 - Catálogo de herramientas docentes

Crear una sección para explorar plataformas y tecnologías útiles para docentes.

Incluye:

- Listado de herramientas.
- Fichas individuales.
- Categorías.
- Uso pedagógico.
- Nivel educativo sugerido.
- Idioma.
- Modalidad de precio.
- Enlace oficial.
- Fecha de revisión.

### 007 - Sección de gadgets educativos

Crear una sección para presentar dispositivos y equipamiento con uso pedagógico.

Incluye:

- Listado de gadgets.
- Fichas individuales.
- Uso educativo.
- Ventajas.
- Limitaciones.
- Público recomendado.
- Precio aproximado solo cuando exista fuente verificable.
- Fecha de revisión.

### 008 - Quiénes somos y políticas

Crear páginas institucionales y de transparencia.

Incluye:

- Página Quiénes Somos.
- Política editorial.
- Política de privacidad.
- Página de contacto.
- Aviso sobre enlaces externos.
- Criterios para contenido patrocinado.

### 009 - SEO, accesibilidad y calidad

Preparar el sitio para buscadores y revisar su calidad técnica.

Incluye:

- Títulos y metadescripciones.
- Open Graph para compartir enlaces.
- Sitemap.
- robots.txt.
- URLs amigables.
- Revisión de imágenes alternativas.
- Revisión de contraste.
- Revisión móvil.
- Revisión de enlaces.

### 010 - Despliegue público

Preparar la primera publicación oficial.

Incluye:

- Validación de build.
- Revisión final de contenido.
- Despliegue en Vercel.
- Configuración de dominio cuando esté disponible.
- Configuración inicial de Google Search Console.
- Revisión post-despliegue.

## Fuera del MVP

Estas funcionalidades se evaluarán después de publicar la primera versión:

- Google AdSense activo.
- Newsletter.
- Registro e inicio de sesión.
- Comentarios públicos.
- Perfiles de usuarios.
- PostgreSQL.
- Favoritos.
- Analítica propia.
- Automatizaciones editoriales.
- Integraciones avanzadas con IA.

## Regla para nuevos cambios

Toda nueva feature importante debe:

1. Agregarse o ajustarse en este roadmap.
2. Tener una carpeta dentro de `spec/features/`.
3. Contar con `spec.md`, `plan.md` y `tasks.md`.
4. Implementarse solo después de revisar sus criterios de aceptación.