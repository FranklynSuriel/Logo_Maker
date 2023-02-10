// file needed for this application
const Circle = require('../lib/circle')

// A testing suite for Circle is created.
describe('Circle', () => {

    // A test is created to validate that functions parameters are correct
    it('Should return a logo circle whit the correct text, color text, and color shape',() => {
       
        const circle = new Circle('FRS', 'white', 'black');
        expect((circle.logoText)).toEqual('FRS');
        expect((circle.textColor)).toEqual('white');
        expect((circle.shapeColor)).toEqual('black');
        
    })
})