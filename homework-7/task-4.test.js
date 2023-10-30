const task = require('./task-4');

test('return the result of multiplying all number in array', () => {
  expect(task.arrayMultiplied([1, 2, 3])).toEqual(6);
});