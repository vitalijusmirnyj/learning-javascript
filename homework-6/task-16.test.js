const task = require('./task-16');

test('will output a new array with all numbers multiplied by 2”', () => {
  expect(task.arrayMultiBy2([1, 2, 4, 6, 4, 5])).toEqual([1 * 2, 2 * 2, 4 * 2, 6 * 2, 4 * 2, 5 * 2]);
});

