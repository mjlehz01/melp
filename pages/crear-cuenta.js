import React, { useState } from "react";
import Router from "next/router";
import Link from "next/link";
import Layout from "../components/layout/Layout";

import firebase from "../firebase";

//validaciones
import useValidacion from "../hooks/useValidacion";
import validarCrearCuenta from "../validaciones/validarCrearCuenta";

const STATE_INICIAL = {
  nombre: "",
  email: "",
  password: "",
};

const CrearCuenta = () => {
  const [error, setError] = useState(false);

  const {
    valores,
    errores,
    handleSubmit,
    handleBlur,
    handleChange,
  } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);

  const { nombre, email, password } = valores;

  async function crearCuenta() {
    try {
      await firebase.registrar(nombre, email, password);
      Router.push("/");
    } catch (error) {
      console.log("Hubo un errores al crear el usuario", error.message);
      setError(error.message);
    }
  }

  return (
    <>
      <Layout>
        <div className="bg-gray-200 min-h-screen flex flex-col">
          <div className="container max-w md:max-w-1/2 lg:max-w-1/3 mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <form
              className="bg-white px-6 py-8 rounded shadow-md text-black w-full"
              onSubmit={handleSubmit}
              noValidate
            >
              <h1 className="mb-8 text-3xl text-center">Crear Cuenta</h1>

              <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                type="text"
                id="nombre"
                placeholder="Nombre Completo"
                name="nombre"
                value={nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errores.nombre && (
                <span className="flex items-center font-medium tracking-wide text-red-700 text-1xl mt-1 ml-1">
                  {errores.nombre}
                </span>
              )}

              <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                type="email"
                id="email"
                placeholder="Correo Electronico"
                name="email"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errores.email && (
                <span className="flex items-center font-medium tracking-wide text-red-700 text-1xl mt-1 ml-1">
                  {errores.email}
                </span>
              )}

              <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                type="password"
                id="password"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errores.password && (
                <span className="flex items-center font-medium tracking-wide text-red-700 text-1xl mt-1 ml-1">
                  {errores.password}
                </span>
              )}

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-gray-500 text-black hover:bg-green-dark focus:outline-none my-1"
              >
                Crea Tu Cuenta
              </button>
            </form>

            <div className="text-grey-dark mt-6">
              Ya tienes una cuenta?
              <Link href="/login">
                <a className="no-underline border-b border-blue text-blue-700 ml-2">
                  Inicia Sesión
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default CrearCuenta;
