const esPrimo = require("./esPrimo");

test('verifica que 7 es un número primo', () => {
  expect(esPrimo(7)).toBe(true);
});

test('verifica que 4 no es un número primo', () => {
  expect(esPrimo(4)).toBe(false);
});

test('verifica que 1 no es considerado primo', () => {
  expect(esPrimo(1)).toBe(false);
});


