/*
Write a function that will accept two numbers and will return a string “equal” if numbers are equal, string “bigger” if the first number
 is bigger than the second, otherwise will return “smaller”.
*/

function equalSmallerOrBigger(number1, number2) {
    if (number1 === number2) {
        return "equal";
    } else if (number1 > number2) {
        return "bigger";
    } else {
        return "smaller"
    }
}

module.exports.equalSmallerOrBigger = equalSmallerOrBigger;

