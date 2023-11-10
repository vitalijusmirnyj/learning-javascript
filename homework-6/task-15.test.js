const myImportedModule = require('./task-15');

test('will output a first number which is odd using break', () => {
    //SETUP
    const logSpy = jest.spyOn(global.console, 'log');
    const array = [1, 1, 1, 2];
    //EXERCISE
    myImportedModule.firstOddNumber(array);
    //VERIFY
    let evenCount = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            expect(logSpy).toHaveBeenNthCalledWith(i + 1, array[i]);
            oddCount++;
        }
        break;
    }
    expect(logSpy).toHaveBeenCalledTimes(evenCount);
});