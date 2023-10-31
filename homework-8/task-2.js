//Write a function that will accept an array of numbers and will return the smallest number in it.

function smallestNumber(array) {
    let smallestNumber = null;
    for (let i = 0; i < array.length; i++) {
        smallestNumber = array[i];
        for (let j = 0; j < array.length; j++) {
            if (array[j] < smallestNumber) {
                smallestNumber = array[j];
            }
        }
        break;
    }
    return smallestNumber;
}

 module.exports.smallestNumber = smallestNumber;