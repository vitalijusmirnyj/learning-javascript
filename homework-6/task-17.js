// /Write a function that will accept an array of numbers and will output a new array with all numbers divided by 2.

function numbersDevidedBy2(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] / 2);
    }
    return newArray;
}

module.exports.numbersDevidedBy2 = numbersDevidedBy2;