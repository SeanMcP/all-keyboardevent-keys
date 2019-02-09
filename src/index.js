const SCRAPED = require('./scraped')
const en_US = require('./languages/en_US')

const special_char = '`~!@#$%^&*()-_+=[{]}\\|:;\'",<.>/?'.split('')

const numbers = '0123456789'.split('')

const key_array = [].concat(numbers, special_char, SCRAPED, en_US)

function generateKEY(_array) {
  const KEY = {}

  _array.forEach(key => {
    if (!KEY[key]) KEY[key] = key
  })

  return KEY
}

export default generateKEY(key_array)
