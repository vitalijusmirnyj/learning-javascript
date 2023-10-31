const task = require('./task-2');

test('finding smallest number in array', () => {
  expect(task.smallestNumber([1, 2, 3, 4])).toBe(1);
});