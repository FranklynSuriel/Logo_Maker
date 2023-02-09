// files needed for this application
const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');
// funtion to render the correct shape
function createDocument(response) {
  // return the selected shape to newShape variable
  let newShape;
    // Create if statements to determine the logo's shape. Then render newShape
    if (response.logoShape === 'Circle') {
        let newShape = new Circle (response.logoText, response.textColor, response.shapeColor)
        return newShape.render()
    }

    if (response.logoShape === 'Square') {
      let newShape = new Square (response.logoText, response.textColor, response.shapeColor)
        return newShape.render()
    }
    
    if (response.logoShape === 'Triangle') {
      let newShape = new Triangle (response.logoText, response.textColor, response.shapeColor)
        return newShape.render()
    }

}

module.exports = createDocument