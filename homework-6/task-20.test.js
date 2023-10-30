const task = require('./task-20');

test('return factorial of a number', () => {
  expect(task.factorialOfNumber(6)).toBe(720);
});