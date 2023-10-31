/*
Write a function that will accept an array of numbers and will return true if the given array is a palindrome
 (i.e., it reads the same backward as forward).
For example:
[1, 2, 3, 2, 1] - is a palindrome
[1, 2, 3, 4, 5] - is not a palindrome
*/

function palindromeOrNot(array) {
    let middle = Math.floor(array.length / 2);
    for (let i = 0, j = array.length - 1; i <= middle, j >= middle; i++, j--) {
        if (array[i] === array[j]) {
        } else {
            return "not palindrome";
        }
        return "palindrome";
    }
}

module.exports.palindromeOrNot = palindromeOrNot;