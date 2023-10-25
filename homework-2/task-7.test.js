const task = require('./task-7');

test('finds a cosine of log10 of square root of number', () => {
  expect(task.findCosineLog10SquareRoot(10000)).toBe(-0.4161468365471424);
});

