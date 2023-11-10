/*
Define a Person class with properties for name, age, and gender, and methods for eating, sleeping, and speaking.
 Each method should print to a console the persons name, age and gender followed by the action (e.g. eating, sleeping, speaking) 
 Create instances of the Person class and invoke each method to ensure they are working correctly. 
*/

class Person {
    name;
    age;
    gender;

    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    eating() {
        console.log(`${this.name} is ${this.gender} and he is ${this.age} of age likes to eat`);
    }
    sleeping() {
        console.log(`${this.name} is ${this.gender} and he is ${this.age} of age likes to sleep`);
    }

    speaking() {
        console.log(`${this.name} is ${this.gender} and he is ${this.age} of age likes to speak`);
    }
}

module.exports.Person = Person;

