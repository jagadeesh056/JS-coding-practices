
//     1
//    2 3
//   3 4 5
//  4 5 6 7
// 5 6 7 8 9

function numberPyramid(y) {
    let res = ""
    let num = 1
    for (let i=1; i <= y; i++) {
        res += " ".repeat(y - i)
        for (let j = 0; j < i; j++) {
            res += (i+j) + " "
        }
        res += "\n"

    }
    return res
}

//console.log(numberPyramid(5))


//         1
//       2 3 2
//     3 4 5 4 3
//   4 5 6 7 6 5 4
// 5 6 7 8 9 8 7 6 5

function numberPyramid(y) {
    let res = ""
    let num = 1
    for (let i=1; i <= y; i++) {
        res += "  ".repeat(y - i)
        for (let j = 0; j < i; j++) {
            res += (i+j) + " "
        }
        for (let j = i - 2; j >= 0; j--) {
            res += (i + j) + " ";
          }
        res += "\n"
    }
    return res
}

console.log(numberPyramid(5))