//Write a function that will accept an array of numbers and will return a new array with all numbers raised to the power of 2.

function numbersRaisedPowerOfTwo(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] ** 2);
    }
    return newArray;
}

module.exports.numbersRaisedPowerOfTwo = numbersRaisedPowerOfTwo;