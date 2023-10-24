const task = require('./task-1');

test('adds number1 and number2', () => {
  expect(task.add(0.1, 2)).toBe(2.1);
});

test('subtracts number1 and number2', () => {
  expect(task.subtract(2, 1)).toBe(1);
});

test('multiplies number1 and number2', () => {
  expect(task.multiply(2, 1)).toBe(2);
});

test('devides number1 and number2', () => {
  expect(task.devide(2, 1)).toBe(2);
});

test('number1 power of number2', () => {
  expect(task.power(2, 2)).toBe(4);
});

test('square of number', () => {
  expect(task.square(9)).toBe(3);
});
