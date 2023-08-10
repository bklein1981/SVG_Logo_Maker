const Triangle = require('../lib/triangle');
const Square = require('../lib/square');
const Circle = require('../lib/circle');

function generateSVG(data) {
shape = getShape(data);

return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${shape.render(data.shapeColor)}
    ${shape.renderText(data.textColor, data.characters)}

</svg>`;
    

}

function getShape(data) {
    if (data.shape === 'Triangle') {
        const shape = new Triangle();
        return shape
} else if (data.shape === 'Circle') {
    const shape = new Circle();
    return shape
}else {
    const shape = new Square();
    return shape
};
};

module.exports = generateSVG