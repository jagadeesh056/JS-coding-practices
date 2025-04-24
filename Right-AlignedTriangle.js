//     *
//    **
//   ***
//  ****
// *****


function  RightAlignedTriangle(r) {
    let res = ""
    for (let i=1; i <= r; i++){
        for (let k=0; k < r - i; k++) {
            res += " "
        }
        for (let j = 0; j < i; j++) {
            res += "*"
        }
        res += "\n"
    }
    return res
}

console.log(RightAlignedTriangle(5))


function rightTriangle(p) {
    let res = ""
    for (let i = 1; i <= p; i++) {
        res += " ".repeat(p-i)
        res += "*".repeat(i)
        res += "\n"
    }
    return res
}

console.log(rightTriangle(5))