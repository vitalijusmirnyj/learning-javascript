/*
Write a function that will accept an array of numbers and will return a new array with all 0 numbers moved to the end of the array without
 changing the order of non-zero elements.
For example:
[1, 0, 2, 0, 3, 0, 4] - should return [1, 2, 3, 4, 0, 0, 0]
Hint: consider using splice and push array methods to solve it.
*/

function allZerosToTheEnd(array) {
    let arrayWithoutZeros = [];
    let newArrayWithZeros = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            newArrayWithZeros.push(array[i])
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            array.splice(i, 1);
        }
    }
    for (let i = 0; i < array.length; i++) {
        arrayWithoutZeros.push(array[i]);
    }
    let joindedArray = arrayWithoutZeros.concat(newArrayWithZeros);
    return joindedArray;
}

module.exports.allZerosToTheEnd = allZerosToTheEnd;