/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let arr = []
    if (x < 0) {
        x = x * -1
          let split = x.toString().split('')
        console.log(split)
        split.forEach(num => arr.unshift(num))
       let sum =  arr.reduce((a, b) => a + b)
        let result = -sum
        console.log(result)
        if (result < -2147483648) {
            return 0
        } else {
            return result
        }
    } else {
        let split = x.toString().split('')
        console.log(split)
        split.forEach(num => arr.unshift(num))
       let sum =  arr.reduce((a, b) => a + b)
       console.log(sum)
        let result = sum
         if (sum > 2147483648) {
            return 0
        } else {
            return result
        }
    }
};