/*
Write a function that will accept an array of numbers and will return a duplicate number (a number that can be found more than once in the array)
 or null if there are no duplicate elements in the array.
For example:
[8, 2, 6, 8, 9] - should return 8, since it is repeated twice
[1, 2, 3, 4, 5] - should return null, since none of the number are repeated (array contains no duplicate numbers)
*/

function findingDuplicate(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                return array[i]
            }
        }
    }
    return null;
}

module.exports.findingDuplicate = findingDuplicate;