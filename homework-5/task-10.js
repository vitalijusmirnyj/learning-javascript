/*Write a function that will accept a single number and will return “even” if a given number is even, otherwise “odd” using only 
the conditional (ternary) operator (see this).
*/

function ternaryOperator(number) {
    return number % 2 === 0 ? "even" : "odd";
}

module.exports.ternaryOperator = ternaryOperator;
