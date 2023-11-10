//Task 01 test.

const myImportedModule = require('./task-12');


beforeEach(() => {
    jest.clearAllMocks();
});

test('return all numbers from 0 up to that number (including it)', () => {

    const logSpy = jest.spyOn(global.console, 'log');

    myImportedModule.fromZeroToNumber(10);

    for (let i = 0; i <= 10; i++) {
        expect(logSpy).toHaveBeenNthCalledWith(i + 1, i);
    }
    expect(logSpy).toHaveBeenCalledTimes(11);
});

//Task 02 test.

test('return all numbers from 0 up to that number (not including it)', () => {

    const logSpy = jest.spyOn(global.console, 'log');

    myImportedModule.numbersFromZeroToNumber(10);


    for (let i = 0; i < 10; i++) {
        expect(logSpy).toHaveBeenNthCalledWith(i + 1, i);
    }
    expect(logSpy).toHaveBeenCalledTimes(10);
});

//Task 03 test.

test('output (using console.log) all numbers from that number down to 0', () => {

    const logSpy = jest.spyOn(global.console, 'log');

    myImportedModule.allNumbersFromNumberToZero(10);


    for (let i = 0, j = 10; i <= 10, j >= 0; i++, j--) {
        expect(logSpy).toHaveBeenNthCalledWith(i + 1, j);
    }
    expect(logSpy).toHaveBeenCalledTimes(11);
});

//Task 04 test.

test('output (using console.log) all numbers from that number down to 0.', () => {

    const logSpy = jest.spyOn(global.console, 'log');
    const myNumber = 10;
    myImportedModule.allNumbersFromNumberToZero(myNumber);

    let count = 0;
    for (let i = myNumber, j = 1; i >= 0; i--) {
        expect(logSpy).toHaveBeenNthCalledWith(j, i);
        j++;
        count++;
    }
    expect(logSpy).toHaveBeenCalledTimes(count);
});

//Task 05 test.

test('output (using console.log) all odd numbers from 0 up to that number (including it)', () => {

    const logSpy = jest.spyOn(global.console, 'log');

    myImportedModule.allOddNumbersFromZeroToThatNumber(10);

    let count = 0;
    for (let i = 0, j = 1; i <= 10; i++) {
        if (i % 2 !== 0) {
            expect(logSpy).toHaveBeenNthCalledWith(j, i);
            j++
            count++;
        }
    }
    expect(logSpy).toHaveBeenCalledTimes(count);
});

//Task 06 test.

test('output (using console.log) the sum of all numbers from zero to that number (including that number)', () => {

    const logSpy = jest.spyOn(global.console, 'log');

    myImportedModule.sumOfAllNumbers(10);

    expect(logSpy).toHaveBeenNthCalledWith(1, 55);

    expect(logSpy).toHaveBeenCalledTimes(1);
});

//Task 07 test.

test('output the sum of all numbers from 0 up to that number (not including it).', () => {

    const logSpy = jest.spyOn(global.console, 'log');

    myImportedModule.sumOfAllNumbersNotIncluding(10);

    expect(logSpy).toHaveBeenNthCalledWith(1, 45);

    expect(logSpy).toHaveBeenCalledTimes(1);
});

//Task 08 test.

test('output (using console.log) each number from the first one to the last one', () => {

    const logSpy = jest.spyOn(global.console, 'log');

    let array = [1, 2, 3, 4, 5];
    myImportedModule.allNumbersFromArray(array);

    let count = 0;
    for (let i = 0; i < array.length; i++) {

        expect(logSpy).toHaveBeenNthCalledWith(i + 1, array[i]);
        count++;
    }

    expect(logSpy).toHaveBeenCalledTimes(count);
});

//Task 09 test.

test('output (using console.log) each number from the last one to the first one', () => {

    const logSpy = jest.spyOn(global.console, 'log');

    let array = [1, 2, 3, 4, 5];
    myImportedModule.allNumbersFromLastToFirst(array);

    let count = 0;
    for (let i = 0, j = array.length - 1; i < array.length; i++, j--) {

        expect(logSpy).toHaveBeenNthCalledWith(i + 1, array[j]);
        count++;
    }

    expect(logSpy).toHaveBeenCalledTimes(count);
});

//Task 10 test.

test('(using console.log) each even number starting from the first one to the last one.', () => {

    const logSpy = jest.spyOn(global.console, 'log');

    let array = [1, 2, 3, 4, 5];
    myImportedModule.eachEvenNumberFromArray(array);

    let count = 0;
    let j = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            expect(logSpy).toHaveBeenNthCalledWith(j + 1, array[i]);
            count++;
            j++;
        }
    }
    expect(logSpy).toHaveBeenCalledTimes(count);
});


//Task 11 test.

test('Will output (using console.log) each odd number starting from the first one to the last one.', () => {

    const logSpy = jest.spyOn(global.console, 'log');

    let array = [1, 2, 3, 4, 5];
    myImportedModule.eachOddNumber(array);

    let count = 0;
    let j = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            expect(logSpy).toHaveBeenNthCalledWith(j + 1, array[i]);
            count++;
            j++;
        }
    }
    expect(logSpy).toHaveBeenCalledTimes(count);
});




