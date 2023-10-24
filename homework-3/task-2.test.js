const task = require('./task-2');

test('change string to lowercase', () => {
  expect(task.textToLowerCase('HELLO')).toBe('hello');
});