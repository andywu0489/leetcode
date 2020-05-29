/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    const output = []
    const split1 = S.split('')
    if (S.length === 0) {
        return ""
    } else {
        split1.forEach(char => {
            if (char.match(/[a-zA-Z]/) !== null ) {
                output.unshift(char)
            }
        })
      for (let i = 0; i < split1.length; i++) {
          if (split1[i].match(/[a-zA-Z]/) === null ) {
                output.splice(i, 0, split1[i])
            }
      }
    }
   return output.reduce((a, b) => a + b)
};