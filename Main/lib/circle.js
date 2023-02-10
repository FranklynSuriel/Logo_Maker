// file needed for this application
const Shape = require('./shapes.js');
 
// Create a Constructor class and extend funtionality whit Shape constructor class
class Circle extends Shape {
  constructor(logoText, textColor, shapeColor) {
    super(logoText, textColor, shapeColor);
  }

  // render shape
  render() {
    return `
      <svg version="1.1"
      width = "300" height = "200"
      xmlns = "http://www.w3.org/2000/svg">
      <circle cx = "150" cy = "100" r = "80" fill = "${this.shapeColor}" />
      <text x = "150" y = "125" font-size = "60" text-anchor = "middle" fill = "${this.textColor}">${this.logoText}</text>
      </svg>
    `
  }
}

// Export module
module.exports = Circle