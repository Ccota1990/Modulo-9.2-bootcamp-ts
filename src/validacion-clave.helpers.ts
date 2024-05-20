import { ValidacionClave } from "./modelo";

const letras = "abcdefghyjklmnñopqrstuvwxyz";
const letras_mayusculas = "ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
const numeros = "0123456789";
const caracteresEspeciales = /[@#+_...]/;


// La clave debe de tener mayúsculas y minúsculas.

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  const tieneMayuscula = letras_mayusculas.split("").some(char => clave.includes(char.toUpperCase()));
  const tieneMinuscula = letras.split("").some(char => clave.includes(char));

  return tieneMayuscula && tieneMinuscula
    ? { esValida: true }
    : { esValida: false, error: "La clave debe tener mayúsculas y minúsculas" };
};

// La clave debe de tener números.

export const tieneNumeros = (clave: string): ValidacionClave => {
  const contieneNumeros = numeros.split("").some(char => clave.includes(char));

  return contieneNumeros
    ? { esValida: true }
    : { esValida: false, error: "La clave debe tener números" };
};

// La clave debe de tener caracteres especiales (@,#,+, _, ...).

export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  const contieneCaracteresEspeciales = caracteresEspeciales.test(clave);

  return contieneCaracteresEspeciales
    ? { esValida: true }
    : { esValida: false, error: "La clave debe tener caracteres especiales" };
};

// La clave debe de tener una longitud mínima de 8 caracteres.

export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  const cumpleLongitudMinima = clave.length >= 8;

  return cumpleLongitudMinima
    ? { esValida: true }
    : { esValida: false, error: "La clave debe tener una longitud mínima de 8 caracteres" };
};

// La clave no debe tener el nombre del usuario.

export const tieneNombreUsuario = (nombreUsuario: string, clave: string): ValidacionClave => {
  const contieneNombreUsuario = clave.includes(nombreUsuario);

  return contieneNombreUsuario
    ? { esValida: false, error: "La clave no debe tener el nombre del usuario" }
    : { esValida: true };
};

// La clave no debe de contener palabras comunes.
export const tienePalabrasComunes = (clave: string, commonPasswords: string[]): ValidacionClave => {
  const contienePalabrasComunes = commonPasswords.includes(clave);

  return contienePalabrasComunes
    ? { esValida: false, error: "La clave no debe contener palabras comunes" }
    : { esValida: true };
};