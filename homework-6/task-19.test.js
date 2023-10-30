const task = require('./task-19');

test('return reversed string', () => {
  expect(task.reversingString('hello')).toBe('olleh');
});