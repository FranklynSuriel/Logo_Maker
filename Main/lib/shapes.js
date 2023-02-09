
class Shape {
    constructor(logoText, logoColor, shapeColor) {
        this.logoText = logoText;
        this.logoColor = logoColor;
        this.shapeColor = shapeColor;
    }

    render() {
        throw new Error('Child class must implement a render() method.')
    }
    
    
}

module.exports = Shape; 