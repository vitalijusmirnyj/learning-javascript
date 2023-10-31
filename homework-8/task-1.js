//Write a function that will accept an array of numbers and will return the largest number in it.

function largestNumber(array) {
    let largestNumber = null;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[i]) {
                largestNumber = array[j];
            } else {
                largestNumber = array[i];
            }
        }
        break;
    } return largestNumber;
}

module.exports.largestNumber = largestNumber;