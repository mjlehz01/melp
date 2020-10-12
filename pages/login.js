import React, { useState } from "react";
import Router from "next/router";

import Layout from "../components/layout/Layout";

import firebase from "../firebase";

//validaciones

import useValidacion from "../hooks/useValidacion";
import validarIniciarSesion from "../validaciones/validarIniciarSesion";

const STATE_INICIAL = {
  email: "",
  password: "",
};

const Login = () => {
  const [error, setError] = useState(false);

  const {
    valores,
    errores,
    handleSubmit,
    handleBlur,
    handleChange,
  } = useValidacion(STATE_INICIAL, validarIniciarSesion, iniciarSesion);

  const { email, password } = valores;

  async function iniciarSesion() {
    try {
      await firebase.login(email, password);
      Router.push("/");
    } catch (error) {
      console.error("Hubo un error al autenticar el usuario", error.message);
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
              <h1 className="mb-8 text-3xl text-center">Iniciar Sesión</h1>

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
              {error && (
                <span className="flex items-center font-medium tracking-wide text-red-700 text-1xl mt-1 ml-1">
                  {error}
                </span>
              )}

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-gray-500 text-black hover:bg-green-dark focus:outline-none my-1"
              >
                Inicia Sesión
              </button>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Login;
