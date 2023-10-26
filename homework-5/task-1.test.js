const task = require('./task-1');

test('return a string value “even” if that number is even', () => {
  expect(task.ifStringIsEven(4)).toBe("even");
});