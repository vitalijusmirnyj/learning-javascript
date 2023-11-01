/*
Write a function that will accept an array of numbers and another parameter called numberToSearchFor and will return the first array index that 
refers to a number equal to the value of numberToSearchFor.
*/

function indexOfEqualOfN(array, numberToSearchFor) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === numberToSearchFor) {
            return i;
        }
    }
}

module.exports.indexOfEqualOfN = indexOfEqualOfN;