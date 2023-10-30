const task = require('./task-3');

test('return number how many time specific number repeats', () => {
  expect(task.specificNumberCount([1, 2, 3, 4, 6, 6, 6], 6)).toEqual(3);
});