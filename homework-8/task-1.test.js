const task = require('./task-1');

test('finding largest number in array', () => {
  expect(task.largestNumber([1, 2, 3, 4])).toBe(4);
});