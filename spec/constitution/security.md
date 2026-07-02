# Seguridad, privacidad y límites del proyecto

## Principio general

Nodo Educativo debe proteger la privacidad de sus visitantes, evitar el uso
innecesario de datos personales y mantener control humano sobre la publicación
de contenido y cambios técnicos relevantes.

## Datos personales

En la primera versión del proyecto no se recopilarán ni almacenarán:

- Datos personales de estudiantes.
- Datos académicos, conductuales o de salud de estudiantes.
- Perfiles de usuarios.
- Sistemas de registro o inicio de sesión.
- Comentarios públicos.
- Información sensible de docentes o visitantes.

Si en el futuro se incorpora un formulario de contacto o newsletter, solo se
solicitarán los datos estrictamente necesarios para esa función.

## Secretos y variables de entorno

- No subir archivos `.env` al repositorio.
- No escribir API keys, tokens, contraseñas o credenciales directamente en el código.
- Usar variables de entorno para servicios externos como Sanity, Vercel o futuros servicios.
- Mantener un archivo `.env.example` sin valores reales cuando sea necesario documentar variables.
- Revisar los cambios antes de hacer commit para evitar publicar información sensible.

## Agentes de IA

- Los agentes no deben realizar commits ni despliegues sin aprobación explícita.
- Los agentes no deben modificar configuraciones de dominio, DNS o producción sin autorización.
- Los agentes no deben instalar dependencias sin justificar su propósito.
- Los agentes no deben ejecutar comandos destructivos sin explicación y aprobación.
- Los agentes deben detenerse y preguntar cuando no tengan suficiente certeza sobre una decisión.
- Los agentes no deben inventar noticias, fuentes, precios, estadísticas o referencias.

## Contenido editorial

- Todo contenido publicado debe tener revisión humana.
- Las noticias deben enlazar o citar su fuente original cuando corresponda.
- El contenido patrocinado debe identificarse de forma visible.
- No se publicarán rankings de herramientas sin una metodología explícita.
- Las fichas de herramientas y gadgets deben incluir fecha de revisión.
- No se deben presentar opiniones como noticias verificadas.

## Publicidad y monetización

- No activar Google AdSense antes de contar con contenido editorial propio y suficiente.
- No colocar anuncios que dificulten la lectura o navegación.
- No confundir anuncios con contenido editorial.
- No solicitar clics en anuncios ni realizar clics propios.
- Cualquier contenido patrocinado debe diferenciarse claramente del contenido editorial.

## Dependencias y código externo

- Revisar la necesidad de cada nueva dependencia antes de instalarla.
- Preferir librerías mantenidas y con documentación oficial.
- No copiar código externo sin comprenderlo.
- No incorporar scripts de terceros sin revisar su procedencia y propósito.
- Mantener actualizadas las dependencias cuando el proyecto esté estable.

## Despliegue y producción

- Usar Vercel inicialmente para despliegues de prueba y producción.
- Revisar los cambios mediante Git antes de desplegar.
- Mantener separado el entorno local del entorno de producción.
- No usar credenciales reales en entornos de prueba.
- Validar que el sitio compile correctamente antes de publicar cambios.

## Revisión de seguridad

Antes de cerrar una tarea relevante, verificar:

1. Que no se hayan expuesto secretos o credenciales.
2. Que no se hayan agregado datos personales innecesarios.
3. Que no se hayan modificado archivos fuera del alcance del ticket.
4. Que `npm run lint` y `npm run build` funcionen cuando el proyecto los tenga disponibles.
5. Que los cambios hayan sido revisados con `git diff`.