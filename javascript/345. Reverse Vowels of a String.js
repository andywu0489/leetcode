/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    const split = s.split('')
    const array = []
    const chars = []
    split.forEach(char => {
        if (vowels.includes(char) === false) {
            array.push(char)
        } else {
            array.push('')
            chars.unshift(char)
        }
    })
    for (let i = 0; i < array.length; i++) {
        if (array[i] === '') {
            array[i] = chars[0]
            chars.shift()
        }
    }   
    if (s !== '') {
        return array.reduce((a, b) => a + b)
    } else {
        return ''
    }
};