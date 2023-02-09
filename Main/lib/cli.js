const inquirer = require('inquirer');
// const { join } = require('path');
const fs = require('fs/promises');
const createDocument = require('./document.js')

function run() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'logoText',
                message: 'Please enter a maximum of three (3) letters to be used in your logo',
                validate(value) {
                    if (value.length > 3)
                        console.log('Logo text can not be more than 3 letter, please try again');
                    else return true;
                },
            },
            {
                type: 'input',
                name: 'logoColor',
                message: 'Enter a color for your letters. (ex: black or hexadecimal #000000)',
                validate(value) {
                    if (value != '') return true;
                    else console.log('You must pick a color for the letters');
                },
            },
            {
                type: 'list',
                name: 'logoShape',
                message: 'Choose a shape from the list below',
                choices: [
                    'Circle',
                    'Triangle',
                    'Square',
                ],
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter a color for the shape. (ex: black or hexadecimal #000000)',
                validate(value) {
                    if (value != '') return true;
                    else console.log('You must pick a color for the shape');
                },
            },
        ])

        .then((response) => {
            responseHandler(response)
            


        })

        .then(() => console.log('Successfully created logo.svg!!'))

        .catch((err) => console.log(err))

}

function responseHandler(response) {
    const logoSvg = createDocument(response);
    fs.writeFile("./output/logo.svg", logoSvg);
    
}



module.exports = run;