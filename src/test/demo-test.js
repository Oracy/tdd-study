const assert = require('chai').assert
const demo = require('../demo-2/demo')


describe('Different test types with Mocha & Chai:', () => {
  it('Test: Should return phrase: "Mocha and Chai are cools!', () => {
    assert.equal(demo(), 'Mocha and Chai are cools!')
  })
})