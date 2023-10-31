/*
Write a function that will accept an array of numbers and will return another array containing the same numbers
 but where all even numbers are at the left side of this array and all odd numbers are at the right side of this array.
*/

function evenLeftOddRight(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            newArray.push(array[i]);
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

module.exports.evenLeftOddRight = evenLeftOddRight;