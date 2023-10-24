/*
Write a function that will accept two parameters (text, searchText) and will return true if text starts with searchText. 
E.g. yourFunction(‘Hello’, ‘Hel’) should return true, 
while yourFunction(‘Hello’, ‘ell’) should return false.
*/

function ifTextStartsWith(text, searchText) {
    return text.startsWith(searchText);
}

module.exports.ifTextStartsWith = ifTextStartsWith;