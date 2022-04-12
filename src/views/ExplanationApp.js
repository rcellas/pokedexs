import React from "react";
import { Link } from "react-router-dom";

function ExplanationApp() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <img
        className="d-block mx-auto mb-4"
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="logo pokeApi"
      />
      <h1 className="display-5 fw-bold">Bienvenid@ a la aplicación</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead ">
          Esta aplicación te permite buscar, eliminar (opción que no es
          persistente) y agregar pokemons a tu lista de favoritos. En la
          pantalla de búsqueda, puedes buscar por nombre en minusculas o
          mayúsculas dandole click en la barra de búsqueda y al boton de BUSCAR.
          Justo en el instante que le des click, ese pokemon quedará en la lista
          de favoritos.
          <br />
          <br />
          Si quieres eliminarlo, solo dale click en el botón de ELIMINAR. Además
          está pantalla te permite buscar los pokemons de forma manual. Solo
          haciendo click en el corazón (no es visible que vea el corazón rojo
          para poder ver si se ha guardado en favoritos). Ni tampoco se puede
          quitar, ya que hay un bug que no permite que se elimine.
          <br />
          <br />
          Nuestros pokemons favoritos están almacenados en el localStorage, por
          lo que si se cierra la aplicación, los pokemons no se perderán. A no
          ser que limpies por completo la chache. Puedes verlos en la pantalla
          de favoritos.
          <br />
          <br />
          En este proceso de desarrollo, la desarrolladora no ha ganado ningún
          gimnasio Pokemón. Puedes ver el código completo en el <a href="https://github.com/rcellas/pokedexs" target="_blank">repositorio</a>.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link
            to={{ pathname: `/inicio` }}
            className="btn btn-primary btn-lg px-4 gap-3"
          >
            Buscador
          </Link>
          <Link
            to={{ pathname: `/favoritos` }}
            className="btn btn-secondary btn-lg px-4 gap-3"
          >
            Favoritos
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ExplanationApp;
