const task = require('./task-5');

test('finds a modulo of a number', () => {
  expect(task.computeModulo(10, 2)).toBe(0);
});
