/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    ransomObj = {}
    magObj = {}
    let check = []
    let ransomSplit = ransomNote.split('')
    let magSplit = magazine.split('')
    ransomSplit.forEach(char => {
        if (char in ransomObj) {
            ransomObj[char]++
        } else {
            ransomObj[char] = 1
        }
    })
      magSplit.forEach(char => {
        if (char in magObj) {
            magObj[char]++
        } else {
            magObj[char] = 1
        }
    })
    if (ransomNote === "" && magazine === "") {
        return true
    } else if (ransomNote === "" && magazine !== "") {
        return true
    } else if (ransomNote !== "" && magazine === "") {
        return false
    } else if (ransomNote !== "" && magazine !== "") {
   
    for (char in ransomObj) {
        if (!(char in magObj)) {
            return (false)
        } else if (char in magObj && ransomObj[char] <= magObj[char]) {
            check.push(true)    
        } else {
            check.push(false) 
        }
    }
    }
    const statusCheck = (status) => {return status === true}
    return check.every(statusCheck)
};