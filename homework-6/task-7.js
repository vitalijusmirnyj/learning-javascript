//Write a function that will accept a single number and will output (using console.log) the sum of all numbers from 0 up to that number (not including it).

function sumOfNumbers2(number) {
    let sum = 0;
    for (let i = 0; i < number; i++) {
        sum = sum + i;
    }
    console.log(sum);
}

module.exports.sumOfNumbers2 = sumOfNumbers2;
