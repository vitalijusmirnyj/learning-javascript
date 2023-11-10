const { Person } = require('./task-1');

beforeEach(() => {
    jest.clearAllMocks();
});

test('Eating should work correctly', () => {
    //SETUP
    const logSpy = jest.spyOn(global.console, 'log');
    const peter = new Person("Peter", 32, "male");
    //EXERCISE
    peter.eating();
    //VERIFY
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenNthCalledWith(1, "Peter is male and he is 32 of age likes to eat");
        
});

test('Sleeping should work correctly', () => {
    //SETUP
    const logSpy = jest.spyOn(global.console, 'log');
    const peter = new Person("Peter", 32, "male");
    //EXERCISE
    peter.sleeping();
    //VERIFY
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenNthCalledWith(1, "Peter is male and he is 32 of age likes to sleep");
        
});