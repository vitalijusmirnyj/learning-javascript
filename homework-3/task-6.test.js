const task = require('./task-6');

test('checks if string starts with specific string', () => {
  expect(task.ifTextStartsWith("changing weather", "changing")).toBe(true);
});

test('checks if string starts with specific string', () => {
  expect(task.ifTextStartsWith("changing weather", "colors")).toBe(false);
});



