const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');
let newShape;
function createDocument(response) {
    if (response.shape === 'Circle') {
        let newShape = new Circle (response.logoText, response.logoColor, response.shapeColor)
        return newShape
    }

    if (response.shape === 'Square') {
      let newShape = new Square (response.logoText, response.logoColor, response.shapeColor)
        return newShape
    }

    if (response.shape === 'Triangle') {
      let newShape = new Triangle (response.logoText, response.logoColor, response.shapeColor)
        return newShape
    }



    return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>SVG_Logo_Generator</title>
      <link rel="stylesheet" href="../dist/style.css" />
    </head>
    <body>
      <div class="card">
        ${newShape}       
      </div>
    </body>
  </html>
  `;
}




module.exports = { createDocument }