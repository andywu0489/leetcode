/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    const split = S.split('')
    const remove = () => {for (let i = 0; i < split.length; i++) {
        if (split[i] === split[i + 1]) {
            split.splice(i, 2)
            i = 0
            remove()
            }
        }
    }
   remove()
    if (split.length > 0) {
        return split.reduce((a, b) => a + b)
    } else return ""
};