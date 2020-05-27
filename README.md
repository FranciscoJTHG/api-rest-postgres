# Api-rest-postgres

API REST que indica la hora e UTC.

#Problema 2:

Desarrollo de un servicio REST, que pueda ser consumido por un WebApp.
Este servicio REST debe permitir, mediante un comando POST, obtener la hora en formato UTC
de 2 parámetros enviados al servicio: hora y timezone
(por ejemplo: dato1=18:31:45, dato2=-3), deberán devolver la hora calculada, en un archivo json.

## Dependencias

Las dependencias se manejaron con el herraminta npm las mismas se puede instalar corriendo el archivo package.json con el comando npm install:

* pg: ^8.2.1,
* express: ^4.17.1


## Estructura del proyecto

Con las tecnonogias indicadas en las dependencias se crea un servicio REST el cual al pasarle dos parametro, que son la hora y el Time Zone calcula el UTC.

Este de divide en:

* `controllers\index.controllers.js`
* `routers/index.js`
* `src/index.js.js`
