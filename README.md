# Pokedex

Pokedex para añadir pokemons favoritos, buscarlos o eliminarlos.

## Stack tecnológico

- [React](https://es.reactjs.org/)
- [Hooks](https://es.reactjs.org/docs/hooks-intro.html)
- [Boostrap](https://getbootstrap.com/)
- [Sass](https://sass-lang.com/)
- [React Router Dom](https://v5.reactrouter.com/web/guides/quick-start)
- [PokeApi](https://pokeapi.co/)

### Cómo ver la app

Lo primero de todo es hacer un git clone del proyecto. Lo puedes realizar por terminal copiando el link que aparece en el botón clone (arriba del repositorio) y añadiendo git clone más el link dentro de terminal.

Una vez hecho esto deberás meterte dentro de la carpeta del proyecto, en esta ocasión pokedexs, poner la línea de comandos npm i o npm install. Esto hará que se instale todo lo necesario dentro del proyecto con la ayuda de package.json. Una vez instaladas las dependecias, para hacerlo correr en tu ordenador deber hacer un npm start.

### Arquitectura

El proyecto está realizado con React, ya que es una librería bastante ágil para realizar este tipo de proyectos.

El proyecto se divide en las siguientes carpetas dentro src:
  - Components: está carpeta portará los componentes principales de la app. Está división es tanto para facilitar como para trabajar bajo el sistema de Atomic Design.     Dentro de ella encontraremos: Navbar, Pagination,Pokedex, PokemonFile, SearchBar. Cada componente tendrá su propio archivo Sass si se ha visto necesario.
  - Context: dentro de está carpeta se encuentra el archivo favoritePokemons, donde poderemos pasar los datos si pasarlos por props. [Más información sobre context         aquí](https://es.reactjs.org/docs/context.html)
  - CustomHooks: aquí encontraremos un custom hook que nos permite poder almacenar los datos recogidos dentro de la app para que se mantengan en el localStorage. [Más información sobre los customs hooks](https://es.reactjs.org/docs/hooks-custom.html)
  - Views: tendremos las vistas principales de la aplicación. Todas ellas están conectadas en el archivo App.js, para poder hacer las rutas dentro de la página. [Más información sobre React Router Dom](https://v5.reactrouter.com/web/guides/quick-start)


### Funcionamiento App

Esta aplicación te permite buscar, eliminar (opción que no es persistente) y agregar pokemons a tu lista de favoritos. En la pantalla de búsqueda, puedes buscar por nombre en minusculas o mayúsculas dandole click en la barra de búsqueda y al boton de BUSCAR. Justo en el instante que le des click, ese pokemon quedará en la lista
de favoritos.

Si quieres eliminarlo, solo dale click en el botón de ELIMINAR. Además está pantalla te permite buscar los pokemons de forma manual. Solo haciendo click en el corazón. Permite eliminar a los pokemons dentro de favoritos excepto el primero, ya que sino elimina todo el resto de favoritos.
          
Nuestros pokemons favoritos están almacenados en el localStorage, por lo que si se cierra la aplicación, los pokemons no se perderán. A no ser que limpies por completo la chache. Puedes verlos en la pantalla de favoritos.

### Cosas a tener en cuenta dentro del proyecto
En la versión actual del proyecto se encuentran lo siguientes bugs
 - Eliminar pokemon no es persistente.
 - Permitir que el primer pokemon agregado a la lista de favoritos no elimine al resto de favoritos

Si se quiere comprobar la persistencia de los Pokemons (tanto para limpiar caché como para ver si lo devuelve correctamente) se deberá dar al botón derecho dentro de la web > inspeccionar > dentro de las pestañas ir a Aplicación > Almacenamiento> Almacenamiento local


