const task = require('./task-8');

test('return the first array index that refers to an even number', () => {
  expect(task.arrayOfFirstEven([1, 2, 3])).toEqual(1);
});