const myImportedModule = require('./task-7');

test('return sum of all numbers from 0 up to that number (not including it)', () => {
    //SETUP
    const logSpy = jest.spyOn(global.console, 'log');
    //EXERCISE
    myImportedModule.sumOfNumbers2(10);
    //VERIFY
    expect(logSpy).toHaveBeenCalledTimes(1);
    
        expect(logSpy).toHaveBeenNthCalledWith(1, 45);
    
});