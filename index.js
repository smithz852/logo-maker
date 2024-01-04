// prompts go here and the write file function
const inquirer = require("inquirer");
const fs = require('fs');

inquirer
 .prompt([
    {
        type: 'input',
        message: 'Enter 3 Character for the Logo Name:',
        name: 'characters'
    },
    {
        type: 'input',
        message: 'What color would you like the text to be (color name or hexadecimal number)?',
        name: 'textColor'
    },
    {
        type: 'checkbox',
        message: 'Which shape would you like the logo to be?',
        choices: ['Circle', 'Triangle', 'Square'],
        name: 'shapes'
    },
    {
        type: 'input',
        message: 'What color would you like the shape to be (color name or hexadecimal number)?',
        name: 'shapeColor'
    },
 ]).then((data) =>
 fs.writeFile('./examples/logo.svg', shapes(data), (err) =>
 err ? console.error(err) : console.log('Logo has been created!')
 ));