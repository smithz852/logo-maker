// Shape classes go here

class Shapes {
   constructor(characters, textColor, shapes, shapeColor) {
    this.characters = characters
    this.textColor = textColor
    this.shapes = shapes
    this.shapeColor = shapeColor
   }
}

function shape(data) {
    const logo = new Shapes(data.characters, data.textColor, data.shapes, data.shapeColor)
    console.log('New', logo)
    let image = logo.shapes[0]
    console.log(logo.shapes[0])
    if (image === "Circle") {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${logo.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${logo.textColor}">${logo.characters}</text>
      </svg>`
    } else if (image === 'Square') {
        return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="125" r="125" fill="${logo.shapeColor}" />
        <text x="150" y="140" font-size="100" text-anchor="middle" fill="${logo.textColor}">${logo.characters}</text>
      </svg>`
    } else {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,10 300,210 0,210" style="fill:${logo.shapeColor}" />
        <text x="150" y="145" font-size="80" text-anchor="middle" fill="${logo.textColor}">${logo.characters}</text>
      </svg>`   
    }
}


module.exports = shape;
