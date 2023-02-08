const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document')

class CLI {
    constructor() {
        this.title = '';
    }

    run() {
        return inquirer
          .prompt([
            {
              type: 'input',
              name: 'name',
              message: 'Please enter your name or logo name:',
            },
          ])
          .then(({ name }) => {
            this.title = `${name}'s Logo`;
            return this.addShape();
          })
          .then(() => {
            return writeFile(
                join(__dirname, '..', 'output', 'shape.html'),
                createDocument(this.logoText, this.logoColor, this.shapeColor)
              );
          })
          .catch((err) => {
            console.log(err);
            console.log('Something went wrong.')

          })
        }

    addShape() {
        return inquirer
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
                    'square',
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
            console.log(response)
            responseHandler(response);

        })

        .then(() => console.log('Successfully created index.html!!'))

        .catch((err) => console.log('An error has occurred, please try again!!'))

    }
}

module.exports = CLI;