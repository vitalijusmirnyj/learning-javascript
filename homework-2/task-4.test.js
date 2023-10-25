const task = require('./task-4');

test('rounds the number to N decimal places', () => {
  expect(task.numberRoundedByN(0.46546, 2)).toBe(47);
});