const task = require('./task-7');

test('checks if string ends with specific string', () => {
  expect(task.textEndsWith("Creating art", "art")).toBe(true);
});

test('checks if string ends with specific string', () => {
    expect(task.textEndsWith("Creating art", "arts")).toBe(false);
  });


