const { Employee } = require('./task-2');


test('Checks if speaking function is correctly returned', () => {
    //SETUP
    const logSpy = jest.spyOn(global.console, 'log');
    const peter = new Employee("Peter", 30, "Male", "1323", "Cleaner", "2000 Dollars");
    //EXERCISE
    peter.speaking();
    //VERIFY
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenNthCalledWith(1, "1323 employee have the position of Cleaner and salary of 2000 Dollars");
        
});



