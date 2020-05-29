/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const a = text.split('')
    
    let obj = {}
    a.forEach(letter => {
        if (letter in obj) {
            obj[letter]++
        } else {
            obj[letter] = 1
        }
    })
    
    let ballonObj = {
        b: 0,
        a: 0,
        l: 0,
        o: 0,
        n: 0
    }
    
    for (letter in obj) {
        if (letter in ballonObj && (letter === 'l' || letter === 'o')) {
            while (obj[letter] - 2 >= 0) {
                obj[letter] -= 2
                ballonObj[letter]++
            }
        } else if (letter in ballonObj) {
            while (obj[letter] -1 >= 0) {
                obj[letter] -= 1
                ballonObj[letter]++
            }
        }
    }
    const arr = Object.values(ballonObj)
    return Math.min(...arr)
};