const task = require('./task-9');

test('finding a larger number', () => {
  expect(task.maxOfTwo(2, 3)).toBe(3);
});