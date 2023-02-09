// packages and files needed for this application
const inquirer = require('inquirer');
const fs = require('fs/promises');
const createDocument = require('./document.js')

// Function to initialize app
function run() {
    inquirer
        .prompt([   // Array of questions for user input
            {
                type: 'input',
                name: 'logoText',
                message: 'Please enter a maximum of three (3) letters to be used in your logo:',
                validate(value) {
                    if (value.length > 3)
                        console.log('Logo text can not be more than 3 letter, please try again!');
                    else return true;
                },
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter a color for your letters. (ex: black or hexadecimal #000000):',
                validate(value) {
                    if (value != '') return true;
                    else console.log('You must pick a color for the letters.');
                },
            },
            {
                type: 'list',
                name: 'logoShape',
                message: 'Choose a shape from the list below:',
                choices: [
                    'Circle',
                    'Triangle',
                    'Square',
                ],
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter a color for the shape. (ex: black or hexadecimal #000000):',
                validate(value) {
                    if (value != '') return true;
                    else console.log('You must pick a color for the shape');
                },
            },
        ])

        .then((response) => {
            // call the funtion to generated the logo.svg file
            responseHandler(response)

        })
        // Print Generated logo.svg after file is created
        .then(() => console.log('Generated logo.svg!!'))

        // if error, diplay the following message
        .catch((err) => 
        console.log('An error has occurred, please try again!!'))

}
// funtion to generated the logo.svg file
function responseHandler(response) {
    const logoSvg = createDocument(response);
    
    // save the file in the output folder
    fs.writeFile("./output/logo.svg", logoSvg);
    
}
// Export the module
module.exports = run;