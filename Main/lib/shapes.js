// Create constructor class Blueprint to use with each shapes
class Shape {
    constructor(logoText, textColor, shapeColor) {
        this.logoText = logoText;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    render() {
        throw new Error('Child class must implement a render() method.')
    }
    
    
}
// Export module
module.exports = Shape; 