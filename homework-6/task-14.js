/*Write a function that will accept a single number and will output (using console.log) every second number 
from that number down to 0 (including it). E.g. given number = 10 the function should output every second number: 10, 8, 6, 4, 2, 0.
*/

function backEverySecondNumber(number) {
    for (let i = number; i >= 0; i -= 2) {
        console.log(i);
    }
}

module.exports.backEverySecondNumber = backEverySecondNumber;