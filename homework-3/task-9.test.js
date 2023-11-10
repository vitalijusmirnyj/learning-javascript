const task = require('./task-9');

test('repeats text n times', () => {
  expect(task.textRepeatedNTimes("Hello", 2)).toBe("HelloHello");
});


test('repeats text n times', () => {
  expect(task.textRepeatedNTimes2("Hello", 4)).toBe("HelloHelloHelloHello");
});