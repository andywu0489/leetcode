/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let arr = []
    for (i = 0; i < nums.length - 1; i += 2) {
        const pair = new Array(nums[i], nums[i + 1])
        arr.push(pair)
    }
    let output = []
    arr.forEach(pair => {
        let freq = pair[0]
        while (freq > 0) {
            output.push(pair[1])
            freq--
        }
    })
    return output
};