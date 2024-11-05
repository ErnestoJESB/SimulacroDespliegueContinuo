// hello.test.js
test('imprime Hola, Mundo', () => {
  console.log = jest.fn(); // Mock console.log
  require('./hello'); // Cargar el archivo hello.js
  expect(console.log).toHaveBeenCalledWith("Hola, Mundo");
});
