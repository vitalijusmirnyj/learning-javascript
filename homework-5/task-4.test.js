const task = require('./task-4');

test('check two numbers and return "equal", "bigger" or "smaller"', () => {
  expect(task.equalSmallerOrBigger(2, 2)).toBe("equal");
});

test('check two numbers and return "equal", "bigger" or "smaller"', () => {
    expect(task.equalSmallerOrBigger(3, 2)).toBe("bigger");
  });

  test('check two numbers and return "equal", "bigger" or "smaller"', () => {
    expect(task.equalSmallerOrBigger(2, 3)).toBe("smaller");
  });


