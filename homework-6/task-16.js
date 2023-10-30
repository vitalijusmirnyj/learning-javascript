//Write a function that will accept an array of numbers and will output a new array with all numbers multiplied by 2.

function arrayMultiBy2(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let newValue = array[i];
        newArray.push(newValue * 2);
    }
    return newArray;
}

module.exports.arrayMultiBy2 = arrayMultiBy2;