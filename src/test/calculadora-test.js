const assert = require('chai').assert
const calc = require('../demo-1/calculadora')


describe('TDD Calculator 4 basic operations', () => {
  it('Test: Should sum 2 numbers', () => {
    assert.equal(calc.add(5, 5), 10)
  })

  it('Test: Should subtract 2 numbers', () => {
    assert.equal(calc.sub(10, 5), 5)
  })

  it('Test: Should multiplicate 2 numbers', () => {
    assert.equal(calc.mul(10, 5), 50)
  })

  it('Test: Should divide 2 numbers', () => {
    assert.equal(calc.div(18, 2), 9)
  })
})

describe('Others asserts test type - Chai', () => {
  it('Test: Should check if number is greater than or less than', () => {
    assert.isAtLeast(6, 2, '6 is greater than 2')
    assert.isAtLeast(7, 7, '7 is equal as 7')
  })
})