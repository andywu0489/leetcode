/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let numCount = {}
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in numCount) {
            numCount[nums[i]]++
            if (numCount[nums[i]] > 2) {
            nums.splice(i, 1)
            i--
            }
        } else {
            numCount[nums[i]] = 1
        }
    }
    return nums.length
};