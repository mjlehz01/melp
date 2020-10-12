export default function validarCrearRestaurante(valores) {
  let errores = {};

  //validar el nombre del restaurante
  if (!valores.name) {
    errores.name = "el Nombre del restaurante es obligatorio";
  }

  //validar contacto
  if (!valores.contact) {
    errores.contact = "Llena todos los campos de contacto";
  }
  if (!valores.address) {
    errores.address = "Llena todos los datos de locacion";
  }
}
