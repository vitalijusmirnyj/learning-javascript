const task = require('./task-8');

test('check if number is even or bigger than 10', () => {
  expect(task.twoNumbersDevided(4, 2)).toBe(true);
});

test('check if number is even or bigger than 10', () => {
  expect(task.twoNumbersDevided(4, 3)).toBe(false);
});