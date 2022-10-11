const stringLength = require('./string_length');

test('Microverse string should have a length of 10', () => {
  expect(stringLength("Microverse")).toBe(10);
});

test('Empty argument should return false', () => {
  expect(stringLength("")).toBe(false);
});

// test('More than 10 charecters', () => {
//     expect(stringLength("MicroverseIsCool")).toBe(9);
// });