import SCRAPED from './scraped'

const en_US_letters_cap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const en_US_letters_low = 'abcdefghijklmnopqrstuvwxyz'
const en_US_special_char = '`~!@#$%^&*()-_+=[{]}\\|:;\'",<.>/?'

const numbers = '0123456789'

const key_array = [
    ...en_US_letters_cap,
    ...en_US_letters_low,
    ...en_US_special_char,
    ...SCRAPED,
    ...numbers
]

const KEY = {}

key_array.forEach(key => {
    if (!KEY[key]) KEY[key] = key
})

console.log(KEY)

export default KEY