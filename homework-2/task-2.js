/*
Create a function that will generate a single random number in the range [from, to], e.g. [1, 1000] or [500, 1000000].
Hint: your function should accept two parameters.
*/

function randomNumber(minRange, maxRange) {
    let randomNumber = minRange + Math.random() * (maxRange - minRange);
    let finalNumber = Math.floor(randomNumber);
    return finalNumber;
}

module.exports.randomNumber = randomNumber;