const task = require('./task-6');

test('finding first duplicate when there are none', () => {
  expect(task.findingDuplicate([1, 2, 3, 4, 5])).toEqual(null);
});

test('finding first duplicate', () => {
    expect(task.findingDuplicate([1, 1, 2, 3, 4])).toEqual(1);
  });