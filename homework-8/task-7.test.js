const task = require('./task-7');

test('all 0 numbers moved to the end of the array', () => {
  expect(task.allZerosToTheEnd([1, 2, 0, 3, 0, 4, 5, 0, 6])).toEqual([1, 2, 3, 4, 5, 6, 0, 0, 0]);
});