module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.js?$': 'babel-jest'
    },
    testRegex: '((\\.|/)(test|spec))\\.js?$',
    moduleFileExtensions: ['js', 'json', 'node']
};