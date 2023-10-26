const task = require('./task-10');

test('check if number even or odd with ternary operator', () => {
  expect(task.ternaryOperator("4")).toBe("even");
});

test('check if number even or odd with ternary operator', () => {
    expect(task.ternaryOperator("5")).toBe("odd");
  });

