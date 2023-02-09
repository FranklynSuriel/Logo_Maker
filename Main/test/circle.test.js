const Circle = require('../lib/circle')

describe('Circle', () => {
    it('Should return a logo circle whit the correct text, color text, and color shape',() => {
       
        const circle = new Circle('FRS', 'white', 'black');
        expect((circle.logoText)).toEqual('FRS');
        expect((circle.logoColor)).toEqual('white');
        expect((circle.shapeColor)).toEqual('black');
        // expect(circle.render()).toEqual(
        //     `<svg version="1.1" 
        //      width = "300" height = "200" 
        //      xmlns = "http://www.w3.org/2000/svg">
        //      <circle cx = "150" cy = "100" r = "80" fill = "${circle.shapeColor}" />      
        //      <text x = "150" y = "125" font-size = "60" text-anchor = "middle" fill = "${circle.logoColor}">${circle.logoText}</text>      
        //      </svg>
        // `)
        
        
        
        
    })
})