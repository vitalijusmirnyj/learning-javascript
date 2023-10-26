/*
Create a function that computes the cosine of the log10 of a square root of an absolute number.
Hint: check if you can reuse already existing functions for this.
*/

function findCosineLog10SquareRoot(number) {
    let squareRoot = Math.sqrt(number);
    let log10 = Math.log10(squareRoot);
    let cosine = Math.cos(log10);
    return cosine;
}

module.exports.findCosineLog10SquareRoot = findCosineLog10SquareRoot;