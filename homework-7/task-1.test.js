const task = require('./task-1');

test('return length of array', () => {
  expect(task.lengthOfArray([1, 2, 3, 4, 6])).toBe(5);
});

