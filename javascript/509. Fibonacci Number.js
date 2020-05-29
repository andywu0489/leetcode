/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if (N > 0) {
    let steps = N
    let a = 0
    let b = 1
    let fib = []
    
    while (N > 0) {
        fib.push(b)
        let c = b + a
        a = b
        b = c
        N--
    } 
        return fib[fib.length-1]
    } else {
        return 0
    }
};