const task = require('./task-11');

test('array with array.length as first element', () => {
  expect(task.firstElementInArrayIsLength([1, 2, 3])).toEqual([3, 1, 2, 3]);
});