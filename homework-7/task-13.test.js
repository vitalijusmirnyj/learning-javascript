const task = require('./task-13');

test('putting zero in middle of the array', () => {
  expect(task.zeroInTheMiddleOfArray([1, 2, 3, 4])).toEqual([1, 2, 0, 3, 4]);
});