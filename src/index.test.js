import KEY from './index'

test('Is an object', () => {
  expect(typeof KEY === 'object' && KEY !== null).toBe(true)
})

test('It has strings for values', () => {
  for (const key in KEY) {
    expect(typeof KEY[key]).toMatch('string')
  }
})
