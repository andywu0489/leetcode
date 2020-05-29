/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let a = address.split('')
    for (i = 0; i < a.length; i++) {
        if (a[i] === '.') {
            a.splice(i, 1, '[.]')
        }        
    }
    return a.join('')
};