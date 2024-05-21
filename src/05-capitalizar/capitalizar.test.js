const capitalizar = require("./capitalizar");

test('convierte "nico el menor profe" a "Nico El Mejor Profe"', () => {
  expect(capitalizar("nico el mejor profe")).toBe("Nico El Mejor Profe");
});

test('una cadena vacía debe devolver una cadena vacía', () => {
  expect(capitalizar("")).toBe("");
});

test('una cadena ya capitalizada no debe cambiar', () => {
  expect(capitalizar("Nico El Mejor Profe")).toBe("Nico El Mejor Profe");
});