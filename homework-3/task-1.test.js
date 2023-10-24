const task = require('./task-1');

test('change string to uppercase', () => {
  expect(task.lettersToUpperCase('world is changing')).toBe('WORLD IS CHANGING');
});