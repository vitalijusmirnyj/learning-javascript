//Write a function that will accept an array of numbers and will output (using console.log) each odd number starting from the first one to the last one.

function oddNumberFromArray(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            console.log(array[i]);
        }
    }
}

module.exports.oddNumberFromArray = oddNumberFromArray;