/*Write a function that will accept an array of numbers and will output a first number which is odd. You should use a break 
statement to terminate the loop once this number is found.
*/

function firstOddNumber(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            console.log(array[i]); 
            break;
        }
    }
}

module.exports.firstOddNumber = firstOddNumber;