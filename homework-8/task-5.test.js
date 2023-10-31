const task = require('./task-5');

test('return majority element (which is more than array length / 2)', () => {
  expect(task.majorityNumber([1, 2, 3, 4, 5])).toEqual(null);
});

test('return majority element (which is more than array length / 2)', () => {
    expect(task.majorityNumber([1, 2, 3, 3, 3])).toEqual(3);
  });