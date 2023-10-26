/*
Write three functions:
First function will have this signature function isOdd(number) and will return true if the given number is odd, otherwise it will return false.

Second function will have this signature function isEven(number) and will return true if the given number is even, otherwise it will return false.

Third function will have this signature function isEvenOrOdd(number) that will return a string “even” if the given number is even or a string “odd”
 if the given number is odd. You should use these two functions that you created above in this function. You should not use the else part in the if
  statements within this function implementation.
*/

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function isOdd(number) {
    if (number % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}

function isEvenOrOdd(number) {
    if (isEven(number)) {
        return "even";
    } else if (isOdd(number)) {
        return "odd";
    }
}