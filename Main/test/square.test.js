// file needed for this application
const Square = require('../lib/square');

// A testing suite for Square is created.
describe('Square', () => {

    // A test is created to validate that functions parameters are correct
    it('Should return a square shape logo with the correct text, color text, and color shape', () => {

        const square = new Square('EX2','black','green');        
        expect((square.logoText)).toEqual('EX2');
        expect((square.textColor)).toEqual('black');
        expect((square.shapeColor)).toEqual('green');
    })
})