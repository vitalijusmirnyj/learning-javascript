const myImportedModule = require('./task-13');

test('output (using console.log) every second number until specified number including that number', () => {
    //SETUP
        const logSpy = jest.spyOn(global.console, 'log');
    //EXERCISE
        myImportedModule.everySecondNumber(10);
    //VERIFY
    expect(logSpy).toHaveBeenCalledTimes(6);
    for (let i = 0, j = 1; i < 6, j < 6; i += 2, j++) {
        expect(logSpy).toHaveBeenNthCalledWith(j, i);
    }
});