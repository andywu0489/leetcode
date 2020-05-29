/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let arr = []
    const max = Math.max(...candies)
    candies.forEach(candy => {
        if (candy + extraCandies < max) {
            arr.push(false)
        } else {
            arr.push(true)
        }
    })
    return arr
};