/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    const attendance = s.split('')
    let obj = {}
    for (let i = 0; i < attendance.length; i++) {
        if (attendance[i] === 'A' && attendance[i] in obj) {
            obj[attendance[i]]++       
        } else if (attendance[i] === 'A') { 
            obj[attendance[i]] = 1
        }
    }
    for (let i = 0; i < attendance.length; i++) {
        if (attendance[i] === 'L' && attendance[i + 1] === 'L' && attendance[i] in obj) {
            obj[attendance[i]]++
        } else if (attendance[i] === 'L' && attendance[i + 1] === 'L' && attendance[i + 2] === 'L') {
            obj[attendance[i]] = 1
        }
    }
    if (obj.L > 0) {return false}
    else if (obj.A > 1) {return false}
    else return true
};