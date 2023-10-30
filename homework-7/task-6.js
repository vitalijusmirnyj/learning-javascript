//Write a function that will accept an array of numbers and will return a new array with all even numbers.

function allEvenNumbers(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

module.exports.allEvenNumbers = allEvenNumbers;