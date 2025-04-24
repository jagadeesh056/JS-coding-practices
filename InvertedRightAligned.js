// *****
//  ****
//   ***
//    **
//     *


function invertedRightAligned(a) {
    let res = ""
    for (let i = a; i >= 0; i--){
        for (let k = 0; k < a - i; k++) {
            res += " "
        }
        for (let j = 0; j < i; j++){
            res += "*"
        }
        
        res += "\n"
    }
    return res
}

console.log(invertedRightAligned(5))
