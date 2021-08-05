const handler = require('./handler.js')

test('Should give discount', () => {
    const result = handler.calculateDiscount(10, 2)
    expect(result).toEqual(8)
})

test('Discount cant be greater than value', () => {
  const result = handler.calculateDiscount(10, 15)
  expect(result).toEqual(0)
})