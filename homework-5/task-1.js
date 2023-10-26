//Write a function that will accept a single number and will return a string value “even” if that number is even.

function ifStringIsEven(number) {
    if (number % 2 === 0) {
return "even";
    }
}

module.exports.ifStringIsEven = ifStringIsEven;