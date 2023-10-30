const task = require('./task-17');

test('will output a new array with all numbers divided by 2', () => {
  expect(task.numbersDevidedBy2([4, 4, 4, 4, 4, 4])).toEqual([4 / 2, 4 / 2, 4 / 2, 4 / 2, 4 / 2, 4 / 2]);
});