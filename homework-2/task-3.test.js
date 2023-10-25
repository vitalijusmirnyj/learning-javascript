const task = require('./task-3');

test('function that computes periodic compound interest', () => {
  expect(task.periodicCompoundInterest(10, 2, 5, 6)).toBe(242014.32355484547);
});

