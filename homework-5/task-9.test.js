const task = require('./task-9');

test('check if string: starts with, ends with, includes specific string', () => {
  expect(task.stringVariations("Hello my world", "Hello")).toBe("Starts-with");
});

test('check if string: starts with, ends with, includes specific string', () => {
    expect(task.stringVariations("Hello my world", "world")).toBe("Ends-with");
  });

  test('check if string: starts with, ends with, includes specific string', () => {
    expect(task.stringVariations("Hello my world", "world")).toBe("Contains");
  });

  test('check if string: starts with, ends with, includes specific string', () => {
    expect(task.stringVariations("Hello my world", "nope")).toBe("Unrelated");
  });