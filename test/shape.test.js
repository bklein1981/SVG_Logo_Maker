const Triangle = require('../lib/triangle');
const Square = require('../lib/square');
const Circle = require('../lib/circle');

describe('Color', () => {
    describe('Triangle', () => {
        it('should return a string with the correponding SVG file with a given color', () => {
            const shape = new Triangle();
            color = 'blue';
            expect(shape.render(color)).toEqual('<polygon points="150, 5 250, 200 50, 200" fill="blue"/>')
        });
    });
    describe('Circle', () => {
        it('should return a string with the correponding SVG file with a given color', () => {
            const shape = new Circle();
            color = 'red';
            expect(shape.render(color)).toEqual('<circle cx="150" cy="100" r="100" fill="red" />');
        });
    });
    describe('Square', () => {
        it('should return a string with the correponding SVG file with a given color', () => {
            const shape = new Square();
            color = 'green';
            expect(shape.render(color)).toEqual('<rect x="50" y="0" rx="0" ry="0" width="200" height="200" fill="green"/>');
        });
    });
});