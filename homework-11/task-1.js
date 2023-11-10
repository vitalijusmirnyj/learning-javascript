/*
Create class for those:

add(element)
remove(index)
get(index)
size()

class List {
    array
}

const myList = new List();
myList.add("1");
myList.add("2");
console.log(myList.size()); // 2
console.log(myList.get(0)); // 1
console.log(myList.get(1)); // 2
myList.remove(0);
console.log(myList.get(0)); // 2
*/

class List {
    #array;

    constructor() {
        this.#array = [];
    }

    add(element) {
        this.#array.push(element);
    }

    remove(index) {
        this.#array.splice(index, 1);
    }

    get(index) {
       return this.#array[index];
    }

    size() {
       return this.#array.length;
    }
}

const myList = new List();
myList.add("1");
myList.add("2");
console.log(myList.size()); // 2
console.log(myList.get(0)); // 1
console.log(myList.get(1)); // 2
myList.remove(0);
console.log(myList.get(0)); // 2

module.exports.List = List;