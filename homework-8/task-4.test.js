const task = require('./task-4');

test('return if the array is palindrome or not', () => {
  expect(task.palindromeOrNot([1, 2, 3, 4, 5])).toEqual("not palindrome");
});

test('return if the array is palindrome or not', () => {
    expect(task.palindromeOrNot([1, 2, 3, 2, 1])).toEqual("palindrome");
  });