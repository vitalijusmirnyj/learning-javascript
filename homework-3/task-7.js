/*
Write a function that will accept two parameters (text, searchText) and will return true if text ends with searchText.
*/

function textEndsWith(text, searchText) {
    return text.endsWith(searchText);
}

module.exports.textEndsWith = textEndsWith;