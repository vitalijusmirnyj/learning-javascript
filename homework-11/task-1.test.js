const { List } = require('./task-1'); // Assuming the class is in a file named 'List.js'


//describe('List class', () => {
    let myList;

    beforeEach(() => {
        myList = new List();
    });

    test('add method should correctly add an element', () => {
        expect(myList.size()).toBe(0); // Check initial size is 0
        myList.add("1");
        expect(myList.size()).toBe(1); // Check size is 1 after adding an element
        expect(myList.get(0)).toBe("1"); // Check the added element is "1"
    });
//});
