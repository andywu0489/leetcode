/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const obj = {}
if (nums === '') {
    return ''
}   
    nums.forEach(num => {
        if (num in obj) {
            obj[num]++
        } else {
            obj[num] = 1
        }
    })
    return _.invert(obj)[1]
};