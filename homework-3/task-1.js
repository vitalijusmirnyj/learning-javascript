/*
Task: Write a function that will accept a single parameter (text) and will return the same string but with all letters changed to uppercase.
*/

function lettersToUpperCase(string) {
    let newString = string.toUpperCase();
    return newString;
}

module.exports.lettersToUpperCase = lettersToUpperCase;