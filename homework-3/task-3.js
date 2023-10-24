/*
Task: Write a function that will accept two parameters (text, index) and will return a single letter at the index. 
E.g. yourFunction(‘Hello’, 2) should return ‘l’ (remember that the first letter in the string is at the index 0).
*/

function singleLetterAtTheIndex(text, index) {
    return text.charAt(index);
}

module.exports.singleLetterAtTheIndex = singleLetterAtTheIndex;