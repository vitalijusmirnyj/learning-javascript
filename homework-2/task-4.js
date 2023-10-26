/*
Task: Create a function that rounds the number to N decimal places.
Hint: your function should accept two parameters.
*/

function numberRoundedByN(number, n) {
    let decimal = 10 ** n;
   let result = Math.round(number * decimal);
   return result;
}

module.exports.numberRoundedByN = numberRoundedByN;