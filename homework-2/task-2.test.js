const task = require('./task-2');

test('return random number from specific value to specific value', () => {
  const minValue = 500;
  const maxValue = 1000;
  const value = task.randomNumber(minValue, maxValue);
  expect(value).toBeGreaterThanOrEqual(minValue);
  expect(value).toBeLessThan(maxValue);
});


