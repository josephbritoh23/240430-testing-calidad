const { describe, test } = require("./fact");

describe("Function factorial", () => {
  test("Debería calcular el factorial de un número correctamente", () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(10)).toBe(3628800);
  });

  test("Debería devolver 1 para el factorial de 0", () => {
    expect(factorial(0)).toBe(1);
  });

  test("Debería devolver NaN para factoriales de números negativos", () => {
    expect(factorial(-5)).toBe(NaN);
    expect(factorial(-10)).toBe(NaN);
  });
});