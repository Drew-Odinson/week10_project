const {Triangle, Square, Circle } = require('../lib/shape');


describe("Triangle", function() {
    it("Render SVG for the blue triangle", function() {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="105, 18 244, 182 56, 182" fill="blue" />');
    });
});

describe("Square", function() {
    it("Render SVG for the red square", function() {
        const shape = new Square();
        shape.setColor("red");
        expect(shape.render()).toEqual('<rect x="75" y="45" width="150" fill="red" />');
    });
});

describe("Circle", function() {
    it("Render SVG for the green circle", function() {
        const shape = new Circle();
        shape.setColor("green");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="75" fill="green" />');
    });
});