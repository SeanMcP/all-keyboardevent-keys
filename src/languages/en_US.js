const en_US_letters_cap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const en_US_letters_cap_array = en_US_letters_cap.split('')
const en_US_letters_low_array = en_US_letters_cap.toLowerCase().split('')

export default [...en_US_letters_cap_array, ...en_US_letters_low_array]
