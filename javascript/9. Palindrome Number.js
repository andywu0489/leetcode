/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    revArr = []
    // console.log(x)
    let split = x.toString().split('')
    console.log(split)
    split.forEach(num => {
        revArr.unshift(num)
    })
    let num = revArr.reduce((a, b) => a + b)
    console.log(num)
    if (x === parseInt(num)) {
        return true
    } else {
        return false
    }
};