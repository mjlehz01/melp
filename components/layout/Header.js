import React, { useContext } from "react";
import Link from "next/link";
import Search from "../ui/Search";
import Navegacion from "./Navegacion";

import { FirebaseContext } from "../../firebase";

const Header = () => {
  const { usuario, firebase } = useContext(FirebaseContext);

  return (
    <>
      <header className="text-gray-700 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img src="/iconos/restaurante.svg" className="h-8" />
              <span className="ml-3 text-xl">Melp</span>
            </a>
          </Link>
          <Search />
          <Navegacion />
          {usuario ? (
            <>
              <button
                className="inline-flex items-center bg-gray-200 border-0 py-1 px-2 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"
                onClick={() => firebase.cerrarSesion()}
              >
                Cerrar Sesión
              </button>
            </>
          ) : (
            <Link href="/login">
              <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-2 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 mx-1 md:mt-0">
                Iniciar Sesión
              </button>
            </Link>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
