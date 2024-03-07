export const Validate = ({ email, password }) => {
  const errors = {};

  // Validar el campo de correo electrónico
  if (!email) {
    errors.email = "El correo electrónico es requerido";
  } else if (!isValidEmail(email)) {
    errors.email = "El correo electrónico no es válido";
  }

  // Validar el campo de contraseña
  if (!password) {
    errors.password = "La contraseña es requerida";
  } else if (password.length < 6) {
    errors.password = "La contraseña debe tener al menos 6 caracteres";
  }

  return errors;
};

const isValidEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
};
