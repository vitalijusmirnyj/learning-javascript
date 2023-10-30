const task = require('./task-5');

test('return numbers from array raised to the power of 2', () => {
  expect(task.numbersRaisedPowerOfTwo([1, 2, 3])).toEqual([1, 4, 9]);
});