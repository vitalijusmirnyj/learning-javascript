const myImportedModule = require('./task-10');

test('output (using console.log) each even number starting from the first one to the last one', () => {
    //SETUP
    const logSpy = jest.spyOn(global.console, 'log');
    const array = [1, 2, 3, 4, 5, 7, 2, 4, 4, 6];
    //EXERCISE
    myImportedModule.evenNumbersFromArray(array);
    //VERIFY
    //expect(logSpy).toHaveBeenCalledTimes(5);
    /*for (let i = 1; i < array.length; i++) {
        if (array[i - 1] % 2 === 0) {
            expect(logSpy).toHaveBeenNthCalledWith(i, array[i]);
        }        
    }
    */
    //i = 1, array[i - 1] = 1, skipped expect
    //i = 2, array[i - 1] = 2, expect(logSpy).toHaveBeenNthCalledWith(2, 2);
    //i = 3, array[i - 1] = 2, expect(logSpy).toHaveBeenNthCalledWith(3, 4);
    /*let invocationNumber = 1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            expect(logSpy).toHaveBeenNthCalledWith(invocationNumber, array[i]);
            invocationNumber++;
        }
    }
    */
    
    for (let i = 0, j = 1; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            expect(logSpy).toHaveBeenNthCalledWith(j, array[i]);
            j++;
        }
    }
});

