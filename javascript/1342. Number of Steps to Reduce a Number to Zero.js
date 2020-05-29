/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
    let number = num
    let steps = 0
    while (number > 0) {
        if (number % 2 === 0) {
            number = number / 2
            steps++
        } else {
            number--
            steps++
        }
    }
    return steps
};