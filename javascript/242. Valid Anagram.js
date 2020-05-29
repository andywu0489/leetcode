/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const a = s.split('')
    const b = t.split('')
    
    if (a.length !== b.length) {return false}
    
    let c = {}
    let d = {}
    
    a.forEach(letter => {
        if (letter in c) {
            c[letter]++
        } else {
            c[letter] = 1
        }
    })
    
    b.forEach(letter => {
        if (letter in d) {
            d[letter]++
        } else {
            d[letter] = 1
        }
    })
    
    let arr = []
    
    for (letter in c) {
        if (letter in d && c[letter] === d[letter]) {
            arr.push(true)
        } else {
            arr.push(false)
        }      
    }
    return arr.every(value => value === true)
};