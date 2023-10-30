const myImportedModule = require('./task-18');

test('function that will accept a string and will print each letter using console.log', () => {
    //SETUP
    const logSpy = jest.spyOn(global.console, 'log');

    //EXERCISE
    const newArray = [];
    let newString = "Hello";
    newArray.push(newString.split(""));
    myImportedModule.eachLetterFromString(newString);
    //VERIFY
    let newCount = 0;
    for (let i = 0; i < newArray.length; i++) {
        expect(logSpy).toHaveBeenNthCalledWith(i +1, newArray[i]);
    newCount++;
    }
    
    expect(logSpy).toHaveBeenCalledTimes(newCount);
});