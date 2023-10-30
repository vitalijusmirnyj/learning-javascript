const task = require('./task-7');

test('return numbers from array that are odd', () => {
  expect(task.allOddNumbers([1, 2, 3])).toEqual([1, 3]);
});