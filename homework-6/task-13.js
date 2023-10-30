/*Write a function that will accept a single number and will output (using console.log) every second number from 0 up to that number (including it). 
E.g. given number = 10 the function should output every second number: 0, 2, 4, 6, 8, 10.     
*/

function everySecondNumber(number) {
    for (let i = 0; i <= number; i = i +2) {
        console.log(i);
    }
}

module.exports.everySecondNumber = everySecondNumber;