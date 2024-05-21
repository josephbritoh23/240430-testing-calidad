const Factorial = require("./Factorial");

test('calcula correctamente el factorial de 5', () => {
  expect(Factorial(5)).toBe(120);
});

test('el factorial de 0 debe ser 1', () => {
  expect(Factorial(0)).toBe(1);
});

test('el factorial de un número negativo debe devolver NaN', () => {
  expect(Factorial(-1)).toBeNaN();
});




