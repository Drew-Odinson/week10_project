const inquirer = require(`inquirer`);
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { Triangle, Circle, Square } = require('../shape');
const SVG = require('../SVG.js');
const { writeFileSync } = require('fs');

class CLI {
  constructor() {
    this.title = '';
    this.tasks = [];
  }


  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Enter a logo name.',
        },
        {
          type: 'input',
          name: 'textcolor',
          message: 'Enter what color you want the text to be?',
        },
        {
          type: 'list',
          name: 'shapetype',
          choices: ['circle', 'triangle', 'square'],
          message: 'Choose your shape?',
        },
    {
          type: 'input',
          name: 'shapecolor',
          message: 'Enter the color you want the shape to be.'
        },
      ])

      .then(({ name, textcolor, shapetype, shapecolor }) => {
        let shape;
        switch (shapetype) {
          case 'circle':
            shape = new Circle();
            shape.setColor(shapecolor);
            break;
          case 'square':
            shape = new Square();
            shape.setColor(shapecolor);
            break;
          default:
            shape = new Triangle();
            shape.setColor(shapecolor);
            break;
        }


        const svg = new SVG();
        svg.setText(name, textcolor);
        svg.setShape(shape);
        return writeFileSync('logo.svg', svg.render());
      })


      .then(() => console.log('Created SVG'))
      .catch((err) => {
        console.log(err);
        console.log('Something went wrong');
      })
  }
}
module.exports = CLI;