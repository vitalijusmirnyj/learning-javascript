const task = require('./task-2');

test('return a string value “odd” if that number is odd', () => {
  expect(task.checkIfOdd(3)).toBe("odd");
});