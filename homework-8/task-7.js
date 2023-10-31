/*
Write a function that will accept an array of numbers and will return a new array with all 0 numbers moved to the end of the array without
 changing the order of non-zero elements.
For example:
[1, 0, 2, 0, 3, 0, 4] - should return [1, 2, 3, 4, 0, 0, 0]
Hint: consider using splice and push array methods to solve it.
*/

function zeroToTheEnd(array) {
    let newArray = [];
for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
        let savedZero = array[i];
        array.splice(i, 1);
        
    }
    newArray.push(array[i]);
    
}
newArray.push(savedZero);
return newArray;
}

console.log(zeroToTheEnd([1, 2, 3, 0, 5, 6]));