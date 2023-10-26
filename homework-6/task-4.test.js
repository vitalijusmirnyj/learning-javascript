const myImportedModule = require('./task-4');

test('return all even numbers from 0 up to that number (including it)', () => {
    //SETUP
    const logSpy = jest.spyOn(global.console, 'log');
    //EXERCISE
    myImportedModule.evenNumberLog(10);
    //VERIFY
    expect(logSpy).toHaveBeenCalledTimes(6);
    for (let i = 0; i <= 5; i++) {
        expect(logSpy).toHaveBeenNthCalledWith(i + 1, i * 2);
    }
});
