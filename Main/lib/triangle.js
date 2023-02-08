const Shape = require('./shapes');
const CLI = require('./cli');

class Triangle extends Shape {
  constructor(logoText, logoColor, shapeColor) {
    super(logoText, logoColor, shapeColor);
  }

  render() {
    return `<svg version = "1.1" 
      width = "300" height="200" 
      xmlns = "http://www.w3.org/2000/svg">
      <polygon points = "160, 10 210,160 105,10   fill = "${this.shapeColor}" />      
      <text x = "150" y = "125" font-size = "60" text-anchor = "middle" fill = "${this.logoColor}">${this.logoText}</text>      
    </svg>`
  }
}

module.exports = Triangle