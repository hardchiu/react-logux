var subscribe = require('../subscribe')
var index = require('../')

it('has subscribe', function () {
  expect(index.subscribe).toBe(subscribe)
})
