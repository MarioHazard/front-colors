# Front colors

Plataforma desarrollada en [Angular](https://angular.io/) v8.3.5. Permite la visualización de una lista de colores y sus propiedades, consumidos de una API mediante REST. Además permite copiar el nombre del color al portapapeles.

## Recursos

Existe un repositorio disponible en  [git](https://github.com/MarioHazard/front-colors).

Existe una versión [online](https://front-colors-impl.herokuapp.com/index.html) en Heroku.

## Instalación

Utilizar [npm](https://www.npmjs.com/) v6.14.4 para instalar las dependencias.

```bash
npm i
```
Utilizar Angular CLI para levantar el servidor en local. `http://localhost:4200`
```bash
ng serve
```
Desde un servidor con [nginx](https://www.nginx.com/) utilizar
```bash
ng build --prod
```
Y mover los recursos de la carpeta /dist/front-colors/ a /var/www/html/
## Uso
- En la vista principal aparece una cuadrilla con los colores, su nombre, año, código y valor pantone. Se puede navegar por las distintas páginas para ir cargando nuevos colores. Se visualizan 9 colores, excepto en la última página que son los restantes.
- Al hacer click en un color, éste se copiará al portapapeles, un mensaje de aviso se ve por 1.5 segundos.

