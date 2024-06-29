import { Triangle, Circle, Square } from './shapes.js';

describe('Triangle', () => {
    test('should render SVG for a blue triangle', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

describe('Circle', () => {
    test('should render SVG for a red circle', () => {
        const shape = new Circle();
        shape.setColor('red');
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });
});

describe('Square', () => {
    test('should render SVG for a green square', () => {
        const shape = new Square();
        shape.setColor('green');
        expect(shape.render()).toEqual('<rect x="70" y="30" width="160" height="160" fill="green" />');
    });
});