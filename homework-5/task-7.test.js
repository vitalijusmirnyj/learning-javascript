const task = require('./task-7');

test('check if number is even or bigger than 10', () => {
  expect(task.checkIfEvenOrBiggerThan10(12)).toBe(true);
});

test('check if number is even or bigger than 10', () => {
    expect(task.checkIfEvenOrBiggerThan10(10)).toBe(true);
  });