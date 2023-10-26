//Write a function that will accept a single number and will return true if the given number is even and bigger than 10, otherwise return false.

function checkIfEvenAndBiggerThan10(number) {
    if (number % 2 === 0 && number > 10) {
        return true; 
    } else {
        return false;
    }
}

module.exports.checkIfEvenAndBiggerThan10 = checkIfEvenAndBiggerThan10;