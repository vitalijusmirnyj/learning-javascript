/*
Write a function that will accept an array of numbers and another parameter called count, and will return another array
 with all numbers rotated to the right by the given count.
For example:
[1, 2, 3, 4], count=1 - should return [4, 1, 2, 3]
[1, 2, 3, 4], count=2 - should return [3, 4, 1, 2]
[1, 2, 3, 4], count=3 - should return [2, 3, 4, 1]
[1, 2, 3, 4], count=4 - should return [1, 2, 3, 4]
*/

function arrayRotatedToTheRightByNumber(array, number) {
        let newArray = [];
        for (let i = 0; i < array.length; i++) {
                let newIndex = i + number;
                if (newIndex >= array.length) {
                        let correctedNewIndex = newIndex % array.lenght;
                        newArray.splice(correctedNewIndex, 0, array[i]);
                } else {
                        newArray.splice(newIndex, 0, array[i]);
                }
        }
        return newArray;
}


console.log(arrayRotatedToTheRightByNumber([1, 2, 3, 4, 5, 6], 2));

module.exports.arrayRotatedToTheRightByNumber = arrayRotatedToTheRightByNumber;