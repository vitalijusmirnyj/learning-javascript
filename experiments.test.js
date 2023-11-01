const myImportedModule = require('./experiments');

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
