const task = require('./task-9');

test('return index of searchedNumber in an array', () => {
  expect(task.indexOfEqualOfN([1, 2, 3], 3)).toEqual(2);
});