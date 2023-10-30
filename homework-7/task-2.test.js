const task = require('./task-2');

test('return first and last element from array', () => {
  expect(task.firstAndLastNumber([1, 2, 3, 4, 6])).toEqual([1, 6]);
});
