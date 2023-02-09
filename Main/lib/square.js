const Shape = require('./shapes.js');

class Square extends Shape {
  constructor(logoText, logoColor, shapeColor) {
    super(logoText, logoColor, shapeColor);
  }

  render() {
    return `
      <svg version = "1.1" 
      width = "300" height = "200" 
      xmlns = "http://www.w3.org/2000/svg">
      <rect x = "10" y = "10" width = "300" height = "200" fill = "${this.shapeColor}" />      
      <text x = "150" y = "130" font-size = "100" text-anchor = "middle" fill = "${this.logoColor}">${this.logoText}</text>      
      </svg>
    `
  }
}

module.exports = Square