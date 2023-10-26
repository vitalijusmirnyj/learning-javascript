const task = require('./task-6');

test('check if number is even and bigger than 10', () => {
  expect(task.checkIfEvenAndBiggerThan10(12)).toBe(true);
});

test('check if number is even and bigger than 10', () => {
    expect(task.checkIfEvenAndBiggerThan10(10)).toBe(false);
  });