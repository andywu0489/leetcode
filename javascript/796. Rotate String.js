/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
    if (A === '' && B === '') {
        return true
    }
    let splitA = A.split('')
    for (let i = 0; i < A.length; i++) {
        splitA.push(splitA[0])
        splitA.shift(splitA[0])
        if (splitA.join('') === B) {
            return true
        }
    }
    return false
};
