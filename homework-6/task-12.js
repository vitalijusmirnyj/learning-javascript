//Implement all of the functions that you created above but now instead of using for loop now use while..do instead.

//Task 01. Write a function that will accept a single number and will output (using console.log) all numbers from 0 up to that number (including it).

function fromZeroToNumber(number) {
    i = 0;
    while (i <= number) {
        console.log(i);
        i++;
    }
}

module.exports.fromZeroToNumber = fromZeroToNumber;

//Task 02. Write a function that will accept a single number and will output (using console.log) all numbers from 0 up to that number (not including it).

function numbersFromZeroToNumber(number) {
    let i = 0;
    while (i < number) {
        console.log(i);
        i++;
    }
}

module.exports.numbersFromZeroToNumber = numbersFromZeroToNumber;

//Task 03. Write a function that will accept a single number and will output (using console.log) all numbers from that number down to 0.

function allNumbersFromNumberToZero(number) {
    let i = number;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}

module.exports.allNumbersFromNumberToZero = allNumbersFromNumberToZero;

//Task 04. Write a function that will accept a single number and will output (using console.log) all even numbers from 0 up to that number (including it).

function allEvenNumbersFromZeroToNumber(number) {
    let i = 0;
    while (i <= number) {
        if (i % 2 === 0) {
            console.log(i);
            i++
        } else {
            i++;
        }
    }
}

module.exports.allNumbersFromNumberToZero = allEvenNumbersFromZeroToNumber;

//Task 05. Write a function that will accept a single number and will output (using console.log) all odd numbers from 0 up to that number (including it).

function allOddNumbersFromZeroToThatNumber(number) {
    let i = 0;
    while (i <= number) {
        if (i % 2 !== 0) {
            console.log(i);
            i++;
        }
        i++;
    }
}

module.exports.allOddNumbersFromZeroToThatNumber = allOddNumbersFromZeroToThatNumber;

/*Task 06. Write a function that will accept a single number and will output (using console.log) the sum of all 
numbers from 0 up to that number (including it).
*/

function sumOfAllNumbers(number) {
    let i = 0;
    let sum = 0;
    while (i <= number) {
        sum += i;
        i++;
    }
    console.log(sum);
}

module.exports.sumOfAllNumbers = sumOfAllNumbers;

//Task 07. Write a function that will accept a single number and will output (using console.log) the sum of all numbers from 0 up to that number (not including it).

function sumOfAllNumbersNotIncluding(number) {
    let i = 0;
    let sum = 0;
    while (i < number) {
        sum += i;
        i++
    }
    console.log(sum);
}

module.exports.sumOfAllNumbersNotIncluding = sumOfAllNumbersNotIncluding

//Task 08. Write a function that will accept an array of numbers and will output (using console.log) each number from the first one to the last one.

function allNumbersFromArray(array) {
    let i = 0;
    while (i < array.length) {
        console.log(array[i]);
        i++;
    }
}

module.exports.allNumbersFromArray = allNumbersFromArray;

//Task 09. Write a function that will accept an array of numbers and will output (using console.log) each number from the last one to the first one.

function allNumbersFromLastToFirst(array) {
    let i = array.length - 1;
    while (i >= 0) {
        console.log(array[i]);
        i--;
    }
}

module.exports.allNumbersFromLastToFirst = allNumbersFromLastToFirst;

/*Task 10. Write a function that will accept an array of numbers and will output (using console.log) each even number starting from the
 first one to the last one.
 */

 function eachEvenNumberFromArray(array) {
    let i = 0;
    while (i < array.length) {
        if (array[i] % 2 === 0) {
            console.log(array[i]);
            i++;
        }
        i++;
    }
}

module.exports.eachEvenNumberFromArray = eachEvenNumberFromArray;

/*
1.Task 11. Write a function that will accept an array of numbers and will output (using console.log) each odd number starting from the first
 one to the last one.
*/

function eachOddNumber(array) {
    while (i < array.lenght) {
        i = 0;
        i++;
    }
    if (array[i] % 2 !== 0) {
        console.log(array[i]);
    }
}

module.exports.eachOddNumber = eachOddNumber;









