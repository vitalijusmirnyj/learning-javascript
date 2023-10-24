const task = require('./task-5');

test('character at index to lower case', () => {
  expect(task.characterAtIndexToLowerCase('Hello', 0)).toBe('h');
});
