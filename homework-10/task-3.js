/*
Create a single class called Shape which will have a single method called area and perimeter. 
Then create the implementations for these shapes (each shape should extend from the Shape class and implement both methods):
Rectangle
Square
Triangle
Ellipse
Circle
*/

class Shape {

    area() {
        return -1;
    }

    perimeter() {
        return -1;
    }
}

class Square extends Shape {
    side;

    constructor(side) {
        super();
        this.side = side;
    }

    area() {
        return this.side * this.side;
    }

    perimeter() {
        return 4 * this.side;
    }
}

module.exports.Square = Square;

class Circle extends Shape {
    radius;

    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * (this.radius ** 2);
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }

}

module.exports.Circle = Circle;
