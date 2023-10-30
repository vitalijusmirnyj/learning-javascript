/*
Write a function that will accept an array of numbers and another parameter called numberToSearchFor
 and will return the total count of how many numbers in that array 
are equal to the value of numberToSearchFor.
*/

function specificNumberCount(array, numberToSearchFor) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (numberToSearchFor === array[i]) {
            count = count + 1;
        }
    }
    return count;
}

module.exports.specificNumberCount = specificNumberCount;