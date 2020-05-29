/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if (digits[digits.length - 1] === 9) {
        let num = (Number(digits.join('')))
        const join = BigInt(digits.join('')) + 1n
    const split = join.toString().split('')
        return split
    } else {
        digits[digits.length - 1]++
        return digits
    }
};