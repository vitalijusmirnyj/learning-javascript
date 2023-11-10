//Write a function that will accept a single number and will return a string “odd” if that number is odd, otherwise will return string “even”.

function oddOrEven(number) {
    if (number % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }

    
}

module.exports.oddOrEven = oddOrEven;
