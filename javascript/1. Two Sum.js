/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arr = []
    nums.forEach(num => {
        for (let i = 0; i < nums.length; i++) {
            if (num + nums[i] === target && arr.length < 2 && nums.indexOf(num) !== i) {
                arr.push(nums.indexOf(num))
                arr.push(i)
            }
        }
    })
    return arr
};