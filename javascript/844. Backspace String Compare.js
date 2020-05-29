/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    const splitS = S.split('')
    const splitT = T.split('')
    for (let i = 0; i < splitS.length; i++) {
        if (splitS[0] ==='#') {
            splitS.splice(0 , 1)
            i--
        } else if (splitS[i] === '#') {
            splitS.splice(i - 1, 2)
            i = i - 2
        }
    }
     for (let i = 0; i < splitT.length; i++) {
        if (splitT[0] ==='#') {
            splitT.splice(0 , 1)
            i--
        } else if (splitT[i] === '#') {
            splitT.splice(i - 1, 2)
            i = i - 2
        }
    }
    if (splitS.length === splitT.length) {
        let status = []
         for (let i = 0; i < splitT.length; i++) {
             if (splitT[i] === splitS[i]) {
                 status.push(true)
             } else {
                 status.push(false)
             }
         }
         const statusCheck = (status) => { return status === true }
        return status.every(statusCheck)
    } else {
        return false
    }
   
};