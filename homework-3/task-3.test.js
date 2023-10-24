const task = require('./task-3');

test('shows character at given index', () => {
  expect(task.singleLetterAtTheIndex('Hello', 0)).toBe('H');
});


