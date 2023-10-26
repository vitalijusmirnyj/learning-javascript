/*
Create a function that will generate a single random number in the range [from, to], e.g. [1, 1000] or [500, 1000000].
Hint: your function should accept two parameters.
*/
 
function randomNumber(number, n) {
let powerOf = 10 ** n;
result = Math.floor(Math.random * powerOf);
return result; 
}

module.exports.randomNumber = randomNumber;


//Still need to study!
