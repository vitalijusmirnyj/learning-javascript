//Write a function that will accept a single number and will return a string value “odd” if that number is odd.

function checkIfOdd(number) {
    if (number % 2 !== 0) {
        return "odd";
    }
}

module.exports.checkIfOdd = checkIfOdd;