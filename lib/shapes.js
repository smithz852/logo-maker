// Shape classes go here

class Shape {
   constructor(characters, textColor, shapeColor) {
    this.characters = characters
    this.textColor = textColor
    this.shapeColor = shapeColor
   }
}

class Circle extends Shape {
  constructor(characters, textColor, shapeColor) {
    super(characters, textColor, shapeColor)
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
    <text x="150" y="117" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>
  </svg>`
  }
}

class Square extends Shape {
  constructor(characters, textColor, shapeColor) {
    super(characters, textColor, shapeColor)
  }
  render() {
    return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
    <rect width="250" height="250" style="fill:${this.shapeColor}" />
    <text x="125" y="155" font-size="90" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>
  </svg>`
  }
}

class Triangle extends Shape {
  constructor(characters, textColor, shapeColor) {
    super(characters, textColor, shapeColor)
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,10 300,210 0,210" style="fill:${this.shapeColor}" />
    <text x="150" y="145" font-size="65" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>
  </svg>`
  }
}


module.exports = {Shape, Circle, Square, Triangle};
