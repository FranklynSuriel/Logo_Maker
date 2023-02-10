// file needed for this application
const Shape = require('./shapes');

// Create a Constructor class and extend funtionality whit Shape constructor class
class Triangle extends Shape {
  constructor(logoText, textColor, shapeColor) {
    super(logoText, textColor, shapeColor);
  }

  // render shape
  render() {
    return 
    `<svg version = "1.1" 
      width = "300" height="200" 
      xmlns = "http://www.w3.org/2000/svg">
      <polygon points = "10,160 210,160 105,10" fill = "${this.shapeColor}" />      
      <text x = "105" y = "135" font-size = "60" text-anchor = "middle" fill = "${this.textColor}">${this.logoText}</text>      
    </svg>`
  }
}

// Export module
module.exports = Triangle