/*
Write a function that will accept an array of numbers and another parameter called count, and will return 
another array with all numbers rotated to the left by the given count.
For example:
[1, 2, 3, 4], count=1 - should return [2, 3, 4, 1]
[1, 2, 3, 4], count=2 - should return [3, 4, 1, 2]
[1, 2, 3, 4], count=3 - should return [4, 1, 2, 3]
[1, 2, 3, 4], count=4 - should return [1, 2, 3, 4]
*/

function elementsRotatedToTheLeft(array, number) {
    let newArray = [];
    for (let j = 0; j < array.length; j++) {
        newArray.push(j);

    }
    for (let i = 0; i < array.length; i++) {
        let newIndex = i - number;
        if (array[i] < 0) {
            let correctedNewIndex = (array.length - 1) - (((newIndex * -1) + array.length) % array.length);
            newArray.splice(correctedNewIndex, 1, array[i]);
        } else {
            newArray.splice(newIndex, 1, array[i]);
        }
    }
    return newArray;
}

module.exports.elementsRotatedToTheLeft = elementsRotatedToTheLeft;