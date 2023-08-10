const inquirer = require('inquirer');
const generateSVG = require('./lib/generate_svg');
const fs = require('fs');

const init = () => {
    inquirer
        .prompt([
            //ask for three character text input
            {
                type: 'input',
                message: "Please enter up to three characters for your logo.",
                name: 'characters',
                validate: (characters) => {
                    if (!characters.length) {
                        return 'Please provide up to three characters for your logo'
                    }
                    if (characters.length > 3) {
                        return 'Please provide up to three characters for your logo.'
                    }
                    return true
                },
                filter: (characters) => {
                    return characters.toUpperCase();
                }
            },
            //ask for text color input
            {
                type: 'input',
                message: "Please enter a color for your logo text either as a keyword (i.e. black, red, etc.) or as a hex number.",
                name: 'textColor',
                filter: (textcolor) => {
                    if (textcolor.startsWith('#')) {
                        return textcolor.toUpperCase();
                    } else {
                        return textcolor.toLowerCase();
                    }
                }
            },
            //ask for circle, square, or triangle
            {
                type: 'list',
                message: "Please choose a shape for your logo",
                name: 'shape',
                choices: ['Square', 'Circle', 'Triangle']
            },
            //ask for color either as a keyword or hex number
            {
                type: 'input',
                message: "Please enter a color for you logo shape either as a keyword (i.e. black, red, etc.) or as a hex number.",
                name: 'shapeColor',
                filter: (shapeColor) => {
                    if (shapeColor.startsWith('#')) {
                        return shapeColor.toUpperCase();
                    } else {
                        return shapeColor.toLowerCase();
                    }
                },
            }
        ])
        .then((answers) => {
            const svgFile = generateSVG(answers);
            writeToFile(svgFile);
        })
    function writeToFile(content) {
        fs.writeFile('./examples/logo.svg', content, 'utf-8', (err) =>
            err ? console.log(err) : console.log("Generated logo.svg")
        );
    }
}

init();