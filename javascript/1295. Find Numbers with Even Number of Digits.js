/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0
    nums.forEach(num => {
        const arr = num.toString().split('')
        if (arr.length % 2 === 0) {
            count++
        }
    })
    return count 
};