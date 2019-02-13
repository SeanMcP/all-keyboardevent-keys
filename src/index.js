import SCRAPED from './scraped'
import en_US from './languages/en_US'

// This might need expanded to include other keyboards
const special_char = '`~!@#$%^&*()-_+=[{]}\\|:;\'",<.>/?'.split('')

// Ensures 'numbers' are strings
const numbers = '0123456789'.split('')

const key_array = [...numbers, ...special_char, ...SCRAPED, ...en_US]

function generateKEY(arr) {
  const obj = {}

  arr.forEach(key => {
    if (typeof key === 'string' && !obj[key]) obj[key] = key
  })

  return obj
}

const KEY = generateKEY(key_array)

export default KEY
