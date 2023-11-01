const task = require('./task-10');

test('returns new array with numbers that appears in both arrays', () => {
  expect(task.commonNumbersInArrays([1, 2, 3], [1, 2 ,3])).toEqual([1, 2 ,3]);
});

test('returns new array with numbers that appears in both arrays', () => {
    expect(task.commonNumbersInArrays([1, 1, 2],[3, 3, 3])).toEqual("No common numbers");
  });