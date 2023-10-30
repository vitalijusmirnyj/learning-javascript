//Write a function that will accept an array of numbers and will print the first and the last number in that array.

function firstAndLastNumber(array) {
    let firstElement = array.shift();
    let lastElement = array.pop();
    return [firstElement, lastElement];
}

module.exports.firstAndLastNumber = firstAndLastNumber;
