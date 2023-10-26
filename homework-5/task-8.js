/*
Write a function that will accept two numbers and return true if the first number can be divided by second number without any remainder 
(remainder should be zero), 
otherwise should return false.
*/

function twoNumbersDevided(number1, number2) {
    if (number1 % number2 === 0) {
        return true;
    } else {
        return false;
    }
}

module.exports.twoNumbersDevided = twoNumbersDevided;