/*
Write a function that will accept to array of numbers and will return a new array with numbers which are common 
in both arrays (i.e., same numbers can be found in both arrays) or empty array if no common elements were found.
For example:
[8, 1, 3, 4], [9, 5, 8, 2] - should return [8], since 8 is the only number that is common in both arrays
[8, 1, 3, 4], [3, 5, 8, 2] - should return [3, 8], since 3 and 8 are common in both arrays
*/

function commonNumbersInArrays(array1, array2) {
    let commonNumberArray = [];
    let commonNumberCount = 0;
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++)
            if (array1[i] === array2[j]) {
                commonNumberArray.push(array1[i]);
                commonNumberCount++;
            }
    }
    if (commonNumberCount === 0) {
        return "No common numbers";
    }
    return commonNumberArray;
}

module.exports.commonNumbersInArrays = commonNumbersInArrays;