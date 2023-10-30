//Write a function that will accept an array of numbers and will return the first array index that refers to an even number.

function arrayOfFirstEven(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            return i;
        }
    }
}

module.exports.arrayOfFirstEven = arrayOfFirstEven;