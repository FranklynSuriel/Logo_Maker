// file needed for this application
const Triangle = require('../lib/triangle');

// A testing suite for Triangle is created.
describe('Triangle', () => {

    // A test is created to validate that functions parameters are correct
    it('Should return a triangle shape logo with the correct text, color text, and color shape', () => {

        const triangle = new Triangle('EX1','yellow','blue');        
        expect((triangle.logoText)).toEqual('EX1');
        expect((triangle.textColor)).toEqual('yellow');
        expect((triangle.shapeColor)).toEqual('blue');
    })
})