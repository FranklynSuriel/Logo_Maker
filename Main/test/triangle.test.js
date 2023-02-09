const Triangle = require('../lib/triangle');

describe('Triangle', () => {
    it('Should return a triangle shape logo with the correct text, color text, and color shape', () => {

        const shape = new Triangle('EX1','yellow','blue');        
        expect(shape.render()).toMatch(`<svg version = "1.1" 
        width = "300" height="200" 
        xmlns = "http://www.w3.org/2000/svg">
        <polygon points = "10,160 210,160 105,10" fill = "${shape.shapeColor}" />      
        <text x = "105" y = "135" font-size = "60" text-anchor = "middle" fill = "${shape.logoColor}">${shape.logoText}</text>      
      </svg>`);
    })
})