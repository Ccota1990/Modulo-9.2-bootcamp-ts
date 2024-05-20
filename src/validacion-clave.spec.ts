import { validarClave,} from './validacion-clave';

import { 
  tieneMayusculasYMinusculas,
  tieneNumeros,
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneNombreUsuario,
  tienePalabrasComunes } from "./validacion-clave.helpers";


describe("tieneMayusculasYMinusculas", () => {
  it("debería devolver esValida si tiene mayúsculas y minúsculas", () => {
    // Arrange
      const clave = "AaBbCc";

    // Act
      const resultado = tieneMayusculasYMinusculas(clave);

    // Assert
      expect(resultado.esValida).toBe(true);
      
  });

  it("debería devolver un error si no tiene mayúsculas y minúsculas", () => {
    // Arrange
      const clave = "prueba";

    // Act
      const resultado = tieneMayusculasYMinusculas(clave);

    // Assert
      expect(resultado.esValida).toBe(false);
      expect(resultado.error).toBe("La clave debe tener mayúsculas y minúsculas");
  });
});



describe("tieneNumeros", () => {
  it("debería devolver esValida si tiene números", () => {
    // Arrange
      const clave = "Abc123";

    // Act
      const resultado = tieneNumeros(clave);

    // Assert
      expect(resultado.esValida).toBe(true);
    
  });

  it("debería devolver un error si no tiene números", () => {
    // Arrange
      const clave = "AbCdEf";

    // Act
      const resultado = tieneNumeros(clave);

    // Assert
      expect(resultado.esValida).toBe(false);
      expect(resultado.error).toBe("La clave debe tener números");
  });
});



describe("tieneCaracteresEspeciales", () => {
  it("debería devolver esValida si tiene caracteres especiales", () => {
    // Arrange
      const clave = "Abc123@";

    // Act
      const resultado = tieneCaracteresEspeciales(clave);

    // Assert
      expect(resultado.esValida).toBe(true);
  });

  it("debería devolver un error si no tiene caracteres especiales", () => {
    // Arrange
      const clave = "Abc123";

    // Act
      const resultado = tieneCaracteresEspeciales(clave);

    // Assert
      expect(resultado.esValida).toBe(false);
      expect(resultado.error).toBe("La clave debe tener caracteres especiales");
  });
});


describe("tieneLongitudMinima", () => {
  it("debería devolver esValida si cumple con la longitud mínima", () => {
    // Arrange
      const clave = "AbCdEf12";

    // Act
      const resultado = tieneLongitudMinima(clave);

    // Assert
      expect(resultado.esValida).toBe(true);
  });

  it("debería devolver un error si no cumple con la longitud mínima", () => {
    // Arrange
    const clave = "Abc123";

    // Act
    const resultado = tieneLongitudMinima(clave);

    // Assert
      expect(resultado.esValida).toBe(false);
      expect(resultado.error).toBe("La clave debe tener una longitud mínima de 8 caracteres");
  });
});



describe("tieneNombreUsuario", () => {
  it("debería devolver esValida si no contiene el nombre de usuario", () => {
    // Arrange
      const nombreUsuario = "usuario123";
      const clave = "Abc123";

    // Act
      const resultado = tieneNombreUsuario(nombreUsuario, clave);

    // Assert
      expect(resultado.esValida).toBe(true);
  });

  it("debería devolver un error si contiene el nombre de usuario", () => {
    // Arrange
      const nombreUsuario = "usuario123";
      const clave = "Abc123usuario123";

    // Act
      const resultado = tieneNombreUsuario(nombreUsuario, clave);

    // Assert
      expect(resultado.esValida).toBe(false);
      expect(resultado.error).toBe("La clave no debe tener el nombre del usuario");
  });
});



describe("tienePalabrasComunes", () => {
  it("debería devolver esValida si no está en la lista de contraseñas comunes", () => {
    // Arrange
      const clave = "Abc123";

    // Act
      const resultado = tienePalabrasComunes(clave, ["password", "123456"]);

    // Assert
      expect(resultado.esValida).toBe(true);
  });

  it("debería devolver un error si está en la lista de contraseñas comunes", () => {
    // Arrange
      const clave = "password";

    // Act
      const resultado = tienePalabrasComunes(clave, ["password", "123456"]);

    // Assert
      expect(resultado.esValida).toBe(false);
      expect(resultado.error).toBe("La clave no debe contener palabras comunes");
  });
});



describe("validarClave", () => {
  it("debería devolver esValida si todas las validaciones son exitosas", () => {
    // Arrange
      const nombreUsuario = "usuario123";
      const clave = "Abc9@rty";
      const commonPasswords = ["password", "123456"];

    // Act
      const resultado = validarClave(nombreUsuario, clave, commonPasswords);

    // Assert
      expect(resultado.esValida).toBe(true);
  });

  it("debería devolver el error concreto si alguna validación falla", () => {
    // Arrange
      const nombreUsuario = "usuario123";
      const clave = "password";
      const commonPasswords = ["password", "123456"];

    // Act
      const resultado = validarClave(nombreUsuario, clave, commonPasswords);

    // Assert
      expect(resultado.esValida).toBe(false);
      expect(resultado.error).toBe("La clave debe tener caracteres especiales");
  });
});