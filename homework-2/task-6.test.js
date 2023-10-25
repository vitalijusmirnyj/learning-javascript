const task = require('./task-6');

test('finds a log10 of number', () => {
  expect(task.findLog10(1000)).toBe(3);
});
