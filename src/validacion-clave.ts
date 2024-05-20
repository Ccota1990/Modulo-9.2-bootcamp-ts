import { ValidacionClave } from "./modelo";

import { 
tieneCaracteresEspeciales,
tieneLongitudMinima,
tieneNumeros,
tieneMayusculasYMinusculas,
tieneNombreUsuario,
tienePalabrasComunes } from "./validacion-clave.helpers";



export const validarClave = ( nombreUsuario: string, clave: string, commonPasswords: string[]): ValidacionClave => {
  
  const validaciones = [
    tieneCaracteresEspeciales(clave),
    tieneLongitudMinima(clave),
    tieneNumeros(clave),
    tieneMayusculasYMinusculas(clave),
    tieneNombreUsuario(nombreUsuario, clave),
    tienePalabrasComunes(clave, commonPasswords),
  ];

  const primeraInvalida = validaciones.find((validacion) => !validacion.esValida);

  return primeraInvalida ? primeraInvalida : { esValida: true };
};