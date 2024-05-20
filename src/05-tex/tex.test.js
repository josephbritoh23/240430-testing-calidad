const { describe, test } = require("./tex");

describe("Function capitalizarCadena", () => {
  test("Debería capitalizar una cadena correctamente", () => {
    expect(capitalizarCadena("hola mundo")).toBe("Hola Mundo");
    expect(capitalizarCadena("frase con mayúsculas")).toBe("Frase Con Mayúsculas");
  });

  test("Debería devolver una cadena vacía si la entrada es vacía", () => {
    expect(capitalizarCadena('')).toBe('');
  });

  test("No debería modificar cadenas ya capitalizadas", () => {
    expect(capitalizarCadena("Hola Mundo")).toBe("Hola Mundo");
    expect(capitalizarCadena("YA ESTOY CAPITALIZADO")).toBe("YA ESTOY CAPITALIZADO");
  });
});

