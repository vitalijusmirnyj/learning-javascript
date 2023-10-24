/*
Write a function that will accept a single parameter (text) and will return the same text but without any leading or
 trailing whitespace symbols. E.g. yourFunction(‘   Hello  ‘) should return ‘Hello’.
*/

function trimMethod(text) {
    return text.trim();
}

module.exports.trimMethod = trimMethod;