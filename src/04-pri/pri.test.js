const { describe, test } = require("./pri");

describe("Function esPrimo", () => {
  test("Debería identificar números primos correctamente", () => {
    expect(esPrimo(2)).toBe(true);
    expect(esPrimo(3)).toBe(true);
    expect(esPrimo(5)).toBe(true);
    expect(esPrimo(11)).toBe(true);
  });

  test("Debería identificar números no primos correctamente", () => {
    expect(esPrimo(1)).toBe(false);
    expect(esPrimo(4)).toBe(false);
    expect(esPrimo(6)).toBe(false);
    expect(esPrimo(10)).toBe(false);
  });
});