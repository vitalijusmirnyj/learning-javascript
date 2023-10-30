//Write a function that will accept an array of numbers and will return the result of multiplying them all.

function arrayMultiplied(array) {
    let resultOfMultiplication = 1;
    for (let i = 0; i < array.length; i++) {
        resultOfMultiplication = resultOfMultiplication * array[i];
    }
    return resultOfMultiplication;
}

module.exports.arrayMultiplied = arrayMultiplied;