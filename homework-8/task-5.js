/*
Write a function that will accept an array of numbers and will return the majority element (element, which is repeated more than n/2 times, 
where n is the length of array) or null, if such element is not found.
*/

function majorityNumber(array) {
    let middleLength = array.length / 2;
    for (let i = 0; i < array.length; i++) {
        let repeatCount = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[i] === array[j]) {
                repeatCount += 1;
            }
        }
        if (repeatCount > middleLength) {
            return array[i];
        }
    }
    return null;
}

module.exports.majorityNumber = majorityNumber;