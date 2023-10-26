const myImportedModule = require('./task-2');

test('return all numbers from 0 up to that number (not including it)', () => {
    //SETUP
    const logSpy = jest.spyOn(global.console, 'log');
    //EXERCISE
    myImportedModule.fromZerotoNumber2(10);
    //VERIFY
    expect(logSpy).toHaveBeenCalledTimes(10);
    for (let i = 0; i <= 9; i++) {
        expect(logSpy).toHaveBeenNthCalledWith(i + 1, i);
    }
});