/*
Task: Create a function that computes a modulo n (remainder).
Hint: your function should accept two parameters.
*/

function computeModulo(number, n) {
    let result = number % n;
    return result;
}

module.exports.computeModulo = computeModulo;