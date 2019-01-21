import SCRAPED from './scraped'
import en_US from './languages/en_US'

const special_char = '`~!@#$%^&*()-_+=[{]}\\|:;\'",<.>/?'

const numbers = '0123456789'

const key_array = [...en_US, ...special_char, ...SCRAPED, ...numbers]

const KEY = {}

key_array.forEach(key => {
  if (!KEY[key]) KEY[key] = key
})

export default KEY
