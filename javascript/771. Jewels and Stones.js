/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    const jewels = J.split('')
    const stones = S.split('')
    let count = 0
    jewels.forEach(jewel => {
        stones.forEach(stone => {
            if (jewel === stone) {
                count++
            }
        })
    })
    return count
};