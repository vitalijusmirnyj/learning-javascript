//Write a function that will accept a single number and will output (using console.log) all even numbers from 0 up to that number (including it).

function evenNumberLog(number) {
    for (let i = 0; i <= number; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

module.exports.evenNumberLog = evenNumberLog;