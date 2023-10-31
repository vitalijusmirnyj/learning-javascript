const task = require('./task-3');

test('will return new array where even numbers on the left, odd on the right', () => {
  expect(task.evenLeftOddRight([1, 2, 3, 4])).toEqual([2, 4, 1, 3]);
});