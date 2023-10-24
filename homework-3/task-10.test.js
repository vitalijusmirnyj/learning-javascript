const task = require('./task-10');

test('trims the string', () => {
  expect(task.trimMethod("  Hello   ")).toBe("Hello");
});

