/*
Task: Create a function which will compute the maximum of two numbers. Try doing that with already existing built-in functions.
Hint: Math object can help here.
*/

function MaxOfTwo(number1, number2) {
    let result = Math.max(number1, number2);
    return result;
}

module.exports.MaxOfTwo = MaxOfTwo;