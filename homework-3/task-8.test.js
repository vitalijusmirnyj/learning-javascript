const task = require('./task-8');

test('checks if string includes specific string', () => {
  expect(task.ifIncludes("Creating art and stuff", "stuff")).toBe(true);
});

test('checks if string includes specific string', () => {
    expect(task.ifIncludes("Creating art", "stuffs")).toBe(false);
  });



