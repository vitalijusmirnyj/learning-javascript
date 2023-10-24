const task = require('./task-4');

test('character at index to upper case', () => {
  expect(task.characterAtIndexToUpperCase('hello', 0)).toBe('H');
});

