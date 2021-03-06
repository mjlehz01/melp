export default function validarCrearCuenta(valores) {
  let errores = {};

  //validar el nombre del usuario
  if (!valores.nombre) {
    errores.nombre = "El nombre es Obligatorio";
  }

  //validar el email
  if (!valores.email) {
    errores.email = "El email es obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)) {
    errores.email = "Correo no Valido";
  }

  //validar contraseña

  if (!valores.password) {
    errores.password = "La contraseña es obligatorio";
  } else if (valores.password.length < 6) {
    errores.password = "La contraseña debe tener al menos 6 caracteteres";
  }
  return errores;
}
