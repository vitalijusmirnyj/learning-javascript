const myImportedModule = require('./task-8');

test('output (using console.log) each number from the first one to the last one', () => {
    //SETUP
    const logSpy = jest.spyOn(global.console, 'log');
    //EXERCISE
    myImportedModule.arrayOfNumbers([1, 2, 2, 4, 4, 6]);
    //VERIFY
    expect(logSpy).toHaveBeenCalledTimes(6);
    for (let i = 0; i < 6; i++) {
        expect(logSpy).toHaveBeenNthCalledWith(i + 1, [1, 2, 2, 4, 4, 6][i]);
    }
});