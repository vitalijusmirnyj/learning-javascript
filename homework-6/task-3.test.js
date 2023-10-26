const myImportedModule = require('./task-3');

test('return all numbers from that number down to 0', () => {
    //SETUP
    const logSpy = jest.spyOn(global.console, 'log');
    //EXERCISE
    myImportedModule.fromNumberToZero(10);
    //VERIFY
    expect(logSpy).toHaveBeenCalledTimes(11);
    for (let i = 0; i <= 10; i++) {
        expect(logSpy).toHaveBeenNthCalledWith(i + 1, 10 - i);
    }
});