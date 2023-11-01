/*
Write a function that will accept an array of numbers and will return another array with a value of 0 inserted 
at Math.floor(n/2) position (here n is the length of an array).
For example:
[1, 2, 3, 4, 5] - should return [1, 2, 0, 3, 4, 5]
Hint: you should use the splice array method.
*/

function zeroInTheMiddleOfArray(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i]);
    }
    let arrayMiddle = Math.floor(array.length / 2);
    newArray.splice(arrayMiddle, 0, 0);
    return newArray;
}

module.exports.zeroInTheMiddleOfArray = zeroInTheMiddleOfArray;