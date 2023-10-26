//Write a function that will accept a single number and will output (using console.log) all numbers from that number down to 0.

function fromNumberToZero(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}