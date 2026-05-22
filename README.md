# SWAPI Angular Exam

Aplicacion web desarrollada con Angular para consultar personajes de Star Wars usando la API publica SWAPI.

## API utilizada

SWAPI - Star Wars API: https://www.swapi.tech/

## Funcionalidades

- Pagina principal con descripcion de la aplicacion.
- Menu de navegacion responsive.
- Listado de personajes consumido desde SWAPI.
- Vista de detalle protegida por un Guard.
- Servicio dedicado para las peticiones HTTP.
- Estados de carga, error y datos vacios.
- Componentes reutilizables para navegacion, tarjetas y estados de UI.

## Guard implementado

La ruta `/personajes/:id` esta protegida por `detailAccessGuard`.
Para acceder al detalle, el usuario debe activar la opcion "Permitir detalles" en la vista de acceso. Esta condicion se guarda en `localStorage`, por lo que no requiere login.


Las capturas de pantalla estan en `docs/screenshots`:

- `inicio.png`: pagina principal.
- `personajes.png`: listado de personajes.
- `acceso.png`: configuracion de acceso del Guard.
- `ruta-protegida.png`: redireccion del Guard cuando el acceso esta desactivado.
