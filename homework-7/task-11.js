/*
Write a function that will accept an array of numbers and will return another array containing the same elements in the same order 
but with the first element having a value of number of elements.
For example:
[1, 2 , 3] - should return [3, 1, 2, 3]. Here the first element is set to a value of 3, since that’s the number of elements.
Hint: you should use the unshift array method.
*/

function firstElementInArrayIsLength(array) {
    let newArray = [];
         for (let i = 0; i < array.length; i++) {
            newArray.push(array[i]);
         }
         newArray.unshift(array.length);
         return newArray;
}

module.exports.firstElementInArrayIsLength = firstElementInArrayIsLength;