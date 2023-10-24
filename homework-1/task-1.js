/*
Create functions for mathematical operations: add, subtract, multiply, divide, power, square root, etc.
*/

function add(number1, number2) {
    result = number1 + number2;
    return result;
} 

module.exports.add = add;

function subtract(number1, number2) {
    result = number1 - number2;
    return result;
}

module.exports.subtract = subtract;

function multiply(number1, number2) {
    result = number1 * number2;
    return result;
}

module.exports.multiply = multiply;

function devide(number1, number2) {
    result = number1 / number2;
    return result;
}

module.exports.devide = devide;

function power(number1, number2) {
    result = number1 ** number2;
    return result;
}

module.exports.power = power;

function square(number) {
    result = Math.sqrt(number);
    return result;
}

module.exports.square = square;