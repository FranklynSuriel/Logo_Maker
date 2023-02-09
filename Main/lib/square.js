// file needed for this application
const Shape = require('./shapes.js');

// Create a Constructor class and extend funtionality whit Shape constructor class
class Square extends Shape {
  constructor(logoText, textColor, shapeColor) {
    super(logoText, textColor, shapeColor);
  }

  // render shape
  render() {
    return `
      <svg version = "1.1" 
      width = "300" height = "200" 
      xmlns = "http://www.w3.org/2000/svg">
      <rect x = "10" y = "10" width = "300" height = "200" fill = "${this.shapeColor}" />      
      <text x = "150" y = "130" font-size = "100" text-anchor = "middle" fill = "${this.textColor}">${this.logoText}</text>      
      </svg>
    `
  }
}

// Export module
module.exports = Square