// prompts go here and the write file function
const inquirer = require("inquirer");
const fs = require('fs');
const {Shape, Circle, Square, Triangle} = require("./lib/shapes");

function shape(data) {
    const logo = new Shape(data.characters, data.textColor, data.shapeColor)
    console.log('New', logo)
    let image = data.shapes[0]
    console.log(data.shapes[0])
    if (image === "Circle") {
       const circle = new Circle (data.characters, data.textColor, data.shapeColor)
        return circle.render()
    } else if (image === 'Square') {
        const square = new Square (data.characters, data.textColor, data.shapeColor)
        return square.render()
    } else {
        const triangle = new Triangle (data.characters, data.textColor, data.shapeColor)
        return triangle.render()   
    }
}

inquirer
 .prompt([
    {
        type: 'input',
        message: 'Enter 3 Character for the Logo Name:',
        name: 'characters',
        validate: function titleValidation(input) {
            if (input === '' || input.length > 3) {
                console.log('Please Enter A Name That Is 1-3 characters')
                return false;
            } else {
                return true;
            }
        },
    },
    {
        type: 'input',
        message: 'What color would you like the text to be (color name or hexadecimal number)?',
        name: 'textColor',
        validate: function titleValidation(input) {
            if (input == '') {
                console.log('Please Enter A Color')
                return false;
            } else {
                return true;
            }
        },
    },
    {
        type: 'checkbox',
        message: 'Which shape would you like the logo to be?',
        choices: ['Circle', 'Triangle', 'Square'],
        name: 'shapes',
        validate: function listValidation(input) {
            if (input == '') {
                return false;
            } else {
                return true;
            }
        },
    },
    {
        type: 'input',
        message: 'What color would you like the shape to be (color name or hexadecimal number)?',
        name: 'shapeColor',
        validate: function titleValidation(input) {
            if (input == '') {
                console.log('Please Enter A Color')
                return false;
            } else {
                return true;
            }
        },
    },
 ]).then((data) =>
 fs.writeFile('./examples/logo.svg', shape(data), (err) =>
 err ? console.error(err) : console.log('Logo has been created!')
 ));