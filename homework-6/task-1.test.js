const myImportedModule = require('./task-1');

test('return all numbers from 0 up to that number (including it)', () => {
    //SETUP
    const logSpy = jest.spyOn(global.console, 'log');
    //EXERCISE
    myImportedModule.fromZeroToNumber(10);
    //VERIFY
    expect(logSpy).toHaveBeenCalledTimes(11);
    for (let i = 0; i <= 10; i++) {
        expect(logSpy).toHaveBeenNthCalledWith(i + 1, i);
    }
});


