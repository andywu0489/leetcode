/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    obj = {}
    nums.forEach(num => {
        if (num in obj) {
            obj[num]++
        } else {
            obj[num] = 1
        }
    })
    arr = []
    for (num in obj) {
        arr.push(obj[num])
    }
    const sorted = arr.sort((a, b) => b - a)
    return _.invert(obj)[sorted[0]]
};