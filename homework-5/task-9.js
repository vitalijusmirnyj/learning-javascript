/*
Write a function that will accept two strings and will return:
“Starts-with” - if the first string starts with the second one.
“Ends-with” - if the first string ends with the second one.
“Contains” - if the second string is within the first one (like abrakadarba contains kadar)
“Unrelated” - otherwise (if no of the above mentioned conditions hold)
*/

function stringVariations(string1, string2) {
    if (string1.startsWith(string2)) {
        return "Starts-with";
    } else if (string1.endsWith(string2)) {
        return "Ends-with";
    } else if (string1.includes(string2)) {
        return "Contains";
    } else {
        return "Unrelated";
    }
}

module.exports.stringVariations = stringVariations;