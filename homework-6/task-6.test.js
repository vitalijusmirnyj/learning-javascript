const myImportedModule = require('./task-6');

test('return the sum of all numbers from 0 up to that number (including it)', () => {
    //SETUP
    const logSpy = jest.spyOn(global.console, 'log');
    //EXERCISE
    myImportedModule.sumOfNumbers(10);
    //VERIFY
    expect(logSpy).toHaveBeenCalledTimes(1);
    
        expect(logSpy).toHaveBeenNthCalledWith(1, 55);
    
});