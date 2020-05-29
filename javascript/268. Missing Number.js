/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    numsObj = {}
    statusCheck = []
    let sortedNums = nums.sort((a, b) => b - a)
    let max = sortedNums[0]
    
    for (i = 0; i <= max; i++) {
        numsObj[i] = 0
    }
    
     nums.forEach(num => {
        if (num in numsObj) {
            numsObj[num]++
        }
    })
    
    for (num in numsObj) {
        if (numsObj[num] === 1) {
            statusCheck.push(true)
        } else {
            statusCheck.push(false)
        }
    }
    
    const status = (status) => {return status === true}
    
    if (statusCheck.every(status) === false) {
        return _.invert(numsObj)[0]
    } else {return max + 1}
    
};