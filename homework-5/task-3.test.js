const task = require('./task-3');

test('return a string “odd” if that number is odd, otherwise will return string “even”', () => {
  expect(task.oddOrEven(3)).toBe("odd");
});

test('return a string “odd” if that number is odd, otherwise will return string “even”', () => {
    expect(task.oddOrEven(4)).toBe("even");
  });
  