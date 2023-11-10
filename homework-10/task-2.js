/*
Create an Employee class that extends the Person class. Add properties like employeeId, position, 
and salary. Override the speaking method to include speaking about work-related topics.
*/

const { Person } = require('./task-1');

class Employee extends Person {
    employeeId;
    position;
    salary;

    constructor(name, age, gender, employeeId, position, salary) {
        super(name, age, gender);
        this.employeeId = employeeId;
        this.position = position;
        this.salary = salary;
    }

    speaking() {
        console.log(`${this.employeeId} employee have the position of ${this.position} and salary of ${this.salary}`);
    }
}

module.exports.Employee = Employee;

