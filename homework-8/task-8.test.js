const task = require('./task-8');

test('returns new array where all elements rotated to the right by number', () => {
  expect(task.arrayRotatedToTheRightByNumber([1, 2, 3, 4, 5, 6], 2)).toEqual([ 6, 5, 1, 2, 3, 4 ]);
});