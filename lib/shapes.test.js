// For tests
const {Shape, Circle, Square, Triangle} = require("./shapes")

it('Determines if shape object can be instantiated', () => {
    const shape = new Shape();
      expect(shape).toBeInstanceOf(Shape);
}) 

it('Should be able to assign parameters to the circle object', () => {
  const characters = 'svg'
  const textColor = 'red'
  const shapeColor = 'blue'
  const circle = new Circle(characters, textColor, shapeColor)

  expect(circle.characters).toBe(characters)
  expect(circle.textColor).toBe(textColor)
  expect(circle.shapeColor).toBe(shapeColor)
})

it('Should be able to assign parameters to the square object', () => {
    const characters = 'svg'
    const textColor = 'red'
    const shapeColor = 'blue'
    const square = new Square(characters, textColor, shapeColor)
  
    expect(square.characters).toBe(characters)
    expect(square.textColor).toBe(textColor)
    expect(square.shapeColor).toBe(shapeColor)
  })

  it('Should be able to assign parameters to the triangle object', () => {
    const characters = 'svg'
    const textColor = 'red'
    const shapeColor = 'blue'
    const triangle = new Triangle(characters, textColor, shapeColor)
  
    expect(triangle.characters).toBe(characters)
    expect(triangle.textColor).toBe(textColor)
    expect(triangle.shapeColor).toBe(shapeColor)
  })


