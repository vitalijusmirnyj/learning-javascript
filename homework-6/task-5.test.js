const myImportedModule = require('./task-5');

test('return all odd numbers from 0 up to that number (including it)', () => {
    //SETUP
    const logSpy = jest.spyOn(global.console, 'log');
    //EXERCISE
    myImportedModule.oddNumberLog(10);
    //VERIFY
    expect(logSpy).toHaveBeenCalledTimes(5);
    for (let i = 0; i < 5; i++) {
        expect(logSpy).toHaveBeenNthCalledWith(i + 1, i * 2 + 1);
    }
});

