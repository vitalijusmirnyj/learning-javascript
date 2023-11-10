const { Square, Circle } = require('./task-3');


test('returns area of square', () => {
    const square = new Square(2);
    expect(square.area()).toBe(4);
});

test('returns area of circle', () => {
    const circle = new Circle(2);
    expect(circle.area()).toBe(12.566370614359172);
});

