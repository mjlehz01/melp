import React from "react";
import Link from "next/link";

const Navegacion = () => {
  return (
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/populares">
        <a className="mr-5 hover:text-gray-900">Populares</a>
      </Link>
      <Link href="/nuevo-restaurante">
        <a className="mr-5 hover:text-gray-900">Nuevo Restaurante</a>
      </Link>
    </nav>
  );
};

export default Navegacion;
