const sub = require("./sub");

test("should return true", () => {
  expect(true).toBe(true);
});

test("la función sub debe retornar la resta de dos numeros naturales", () => {
  const result = sub(2, 3);
  expect(result).toBe(1);
});

test("la función debe retornar error si alguno de los parametros no es un numero entero", () => {
  const result = sub("2", 3);
  const error = "los argumentos deben ser numeros enteros";
  expect(result).toBe(error);
});
