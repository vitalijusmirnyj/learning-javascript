/*
Write a function that will accept an array of numbers and return another array with numbers in reverse order, e.g. given array [1,2,3] 
the function should return [3,2,1].
*/

function reverseArray(array) {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

module.exports.reverseArray = reverseArray;