//Write a function that will accept a single number and will output (using console.log) all numbers from 0 up to that number (not including it).

function fromZerotoNumber2(number) {
    for (let i = 0; i < number; i++) {
        console.log(i);
    }
}

module.exports.fromZerotoNumber2 = fromZerotoNumber2;