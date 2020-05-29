/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const arr = n.toString().split('')
    const product = arr.reduce((a, b) => parseInt(a) * parseInt(b))
    const sum = arr.reduce((a, b) => parseInt(a) + parseInt(b))
    return product - sum 
};