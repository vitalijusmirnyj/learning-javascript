/*
Write a function that will accept a string and will return another string which will be a reverse of the original. 
E.g. given string “booboo” the function should return “ooboob”.  
*/

function reversingString(string) {
    let newString = string.split('').reverse().join('');
    return newString;
}

module.exports.reversingString = reversingString;
