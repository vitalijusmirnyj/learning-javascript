const myImportedModule = require('./task-11');

test('output (using console.log) each odd number starting from the first one to the last one', () => {
    //SETUP
    const logSpy = jest.spyOn(global.console, 'log');
    const array = [1, 2, 2, 4, 4, 6];
    //EXERCISE
    myImportedModule.oddNumberFromArray(array);
    //VERIFY
    expect(logSpy).toHaveBeenCalledTimes(1);
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] % 2 !== 0) {
        expect(logSpy).toHaveBeenNthCalledWith(i, array[i - 1]);
        }
    }
});

