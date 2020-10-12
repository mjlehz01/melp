import React from "react";

const DetallesRestaurante = ({ restarante }) => {
  const {
    id,
    name,
    contact: { site, email, phone },
    address: {
      street,
      city,
      state,
      location: { lat, lng },
    },
    rating,
  } = restarante;
  return (
    <li>
      <div></div>
      <div>
        <h1>{name}</h1>
      </div>
    </li>
  );
};

export default DetallesRestaurante;
