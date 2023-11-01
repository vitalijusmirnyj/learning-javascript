const task = require('./task-10');

test('return reversed array', () => {
  expect(task.reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
});