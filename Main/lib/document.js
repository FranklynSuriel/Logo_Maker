const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

function createDocument(response) {
  
  let newShape;
    if (response.logoShape === 'Circle') {
        let newShape = new Circle (response.logoText, response.logoColor, response.shapeColor)
        return newShape.render()
    }else if (response.logoShape === 'Square') {
      let newShape = new Square (response.logoText, response.logoColor, response.shapeColor)
        return newShape.render()
    }else if (response.logoShape === 'Triangle') {
      let newShape = new Triangle (response.logoText, response.logoColor, response.shapeColor)
        return newShape.render()
    }

}

module.exports = createDocument