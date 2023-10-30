/*
Write a function that will accept a single number and will return a factorial of it (the function signature should be function factorial(n)). E.g.
 factorial(1) should return 1, factorial(2) should return 2, factorial(3) should return 6 and so on. You should use loops only 
(do not attempt recursion since it’s too early for you right now).
*/

function factorialOfNumber(number) {
    let sum = 1;
    for (let i = number; i > 0; i--) {
        sum = sum * i;
    }
    return sum;
}

module.exports.factorialOfNumber = factorialOfNumber;