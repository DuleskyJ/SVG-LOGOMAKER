import inquirer from 'inquirer';
import fs from 'fs';
import { Triangle, Circle, Square } from './lib/shapes.mjs';

console.log('Script started');  // Debug line

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter text for the logo (up to 3 characters):',
        validate: input => input.length <= 3 || 'Text must be up to 3 characters long.',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hexadecimal):',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for the logo:',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hexadecimal):',
    },
    {
        type: 'input',
        name: 'fontSize',
        message: 'Enter the font size for the text:',
        default: '60',
    },
    {
        type: 'input',
        name: 'fontFamily',
        message: 'Enter the font family for the text:',
        default: 'Arial',
    }
];

inquirer.prompt(questions).then(answers => {
    console.log('User provided inputs:', answers);  // Debug line

    const { text, textColor, shape, shapeColor, fontSize, fontFamily } = answers;
    let shapeInstance;

    switch (shape) {
        case 'Triangle':
            shapeInstance = new Triangle();
            break;
        case 'Circle':
            shapeInstance = new Circle();
            break;
        case 'Square':
            shapeInstance = new Square();
            break;
    }

    shapeInstance.setColor(shapeColor);

    const svgContent = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeInstance.render()}
    <text x="150" y="125" font-size="${fontSize}" font-family="${fontFamily}" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>
    `;

    fs.writeFile('logo.svg', svgContent.trim(), err => {
        if (err) {
            console.error('Error generating logo.svg:', err);
        } else {
            console.log('Generated logo.svg');
        }
    });
});