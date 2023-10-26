const task = require('./task-8');

test('multiply two big numbers', () => {
  expect(task.twoBigNumbersMultiplication(10000000000n, 1000000000000n)).toBe(10000000000000000000000n);
});


