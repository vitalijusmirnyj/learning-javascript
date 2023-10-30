const task = require('./task-6');

test('return numbers from array that are even', () => {
  expect(task.allEvenNumbers([1, 2, 3])).toEqual([2]);
});