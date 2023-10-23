const task = require('./task-1');

test('adds 1 + 2 to equal 3', () => {
  expect(task.sum(1, 2)).toBe(3);
});
