/*
Write a function that will accept two parameters (text, repeatCount) and will return another text that repeats the original text repeatCount times.
 E.g. yourFunction(‘Hello’, 3) should return ‘HelloHelloHello’.
*/

function textRepeatedNTimes(text, repeatCount) {
    let bigWord = text;
    for (let i = 0; i < repeatCount - 1; i++) {
        bigWord = bigWord + text;
    }
    return bigWord;
}

module.exports.textRepeatedNTimes = textRepeatedNTimes;


function textRepeatedNTimes2(text, repeatCount) {
    let finalText = text.repeat(repeatCount);
    return finalText;
}

module.exports.textRepeatedNTimes2 = textRepeatedNTimes2;

