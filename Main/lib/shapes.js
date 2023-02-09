// const CLI = require('./cli');

class Shape {
    constructor(logoText, logoColor, shapeColor) {
        this.logoText = logoText;
        this.logoColor = logoColor;
        this.shapeColor = shapeColor;
    }

    render() {
        throw new Error('Child class must implement a render() method.')
    }
    // setLogoText() {
    //     return `${this.logoText}`;
    // }
    // setLogoColor() {
    //     return `${this.logoColor}`;
    // }
    // setShapeColor() {
    //     return `${this.shapeColor}`;
    // }
    
}

module.exports = Shape; 