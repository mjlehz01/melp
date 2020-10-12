import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import Layout from "../components/layout/Layout";

import { FirebaseContext } from "../firebase";

//validaciones
import useValidacion from "../hooks/useValidacion";
import validarCrearRestaurante from "../validaciones/validarCrearRestaurante";

const STATE_INICIAL = {
  name: "",
  contact: { site: "", email: "", phone: "" },
  address: {
    street: "",
    city: "",
    state: "",
    location: { lat: "", lng: "" },
  },
};

const NuevoRestaurante = () => {
  const [error, setError] = useState(false);

  const {
    valores,
    errores,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useValidacion(STATE_INICIAL, validarCrearRestaurante, crearRestaurante);

  const { name, contact, address } = valores;

  //hook para redireccionar
  const router = useRouter();

  //context con las operacion crud de firebase
  const { usuario, firebase } = useContext(FirebaseContext);

  async function crearRestaurante() {
    //si el usuario no esta logeado llevar a login
    if (!usuario) {
      return router.push("/login");
    }

    //crear el objeto de nuevo restaurante
    const restaurante = {
      name,
      contact: { site, email, phone },
      address: {
        street,
        city,
        state,
        location: { lat, lng },
      },
      rating: 0,
    };
    //insertarlo en la base de datos
    firebase.db.collection("restaurantes").add(restaurante);

    return router.push("/");
  }

  return (
    <>
      <Layout>
        <div className="leading-loose">
          <form
            className="max-w-xl m-4 p-10 bg-white rounded shadow-xl"
            onSubmit={handleSubmit}
            noValidate
          >
            <h1 className="text-gray-800 font-medium">Nuevo Restaurante</h1>
            <div className="mt-2">
              <label
                className="block text-sm text-gray-00"
                htmlFor="nombre del restaurante"
              >
                Nombre del restaurante
              </label>
              <input
                className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                type="text"
                id="name"
                placeholder="Introduce el nombre del restaurante"
                name="name"
                value={name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div className="mt-2">
              <label
                className=" block text-sm text-gray-600"
                htmlFor="contanto"
              >
                Contacto
              </label>
              <input
                className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                id="site"
                name="site"
                placeholder="URL del restaurante"
                type="url"
                value={contact.site}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <input
                className="w-full px-2 py-2 mt-1 text-gray-700 bg-gray-200 rounded"
                id="email"
                name="email"
                placeholder="Telefono del Restaurante"
                type="email"
                value={contact.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <input
                className="w-full px-2 py-2 mt-1 text-gray-700 bg-gray-200 rounded"
                id="site"
                name="site"
                placeholder="Numero del restaurante"
                type="text"
                value={contact.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="mt-2">
              <label
                className="text-sm block text-gray-600"
                htmlFor="cus_email"
              >
                Ciudad
              </label>
              <input
                className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                type="text"
                id="city"
                placeholder="En que ciudad esta"
                name="city"
                value={contact.city}
              />
            </div>
            <div className="inline-block mt-2 w-1/2 pr-1">
              <label
                className="hidden block text-sm text-gray-600"
                htmlFor="cus_email"
              >
                Country
              </label>
              <input
                className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                id="cus_email"
                name="cus_email"
                type="text"
                required=""
                placeholder="Country"
                aria-label="Email"
              />
            </div>
            <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
              <label
                className="hidden block text-sm text-gray-600"
                htmlFor="cus_email"
              >
                Zip
              </label>
              <input
                className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                id="cus_email"
                name="cus_email"
                type="text"
                required=""
                placeholder="Zip"
                aria-label="Email"
              />
            </div>
            <p className="mt-4 text-gray-800 font-medium">
              Payment information
            </p>

            <div className="mt-4">
              <button
                className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                type="submit"
              >
                $3.00
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};
export default NuevoRestaurante;
