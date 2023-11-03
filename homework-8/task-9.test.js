const task = require('./task-9');

test('returns new array where all elements rotated to the left by number', () => {
  expect(task.elementsRotatedToTheLeft([1, 2, 3, 4, 5, 6], 3)).toEqual([ 4, 5, 6, 1, 2, 3 ]);
});