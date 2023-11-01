const task = require('./task-12');

test('array with array.length as last element', () => {
  expect(task.lastElementArrayLength([1, 2, 3])).toEqual([1, 2, 3, 3]);
});