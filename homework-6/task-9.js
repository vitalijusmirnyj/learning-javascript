//Write a function that will accept an array of numbers and will output (using console.log) each number from the last one to the first one.

function numbersFromLastToFirst(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

module.exports.numbersFromLastToFirst = numbersFromLastToFirst;