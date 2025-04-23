//check single digit even or odd

// function evenOdd(num) {
//     if (num < 0) {
//         throw new Error("Provide Positive Number")
//     }
//     return num % 2 === 0 ? "Even" : "Odd"

// }

// console.log(evenOdd(11))

//check values in arr even or odd

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]

// let result = {
//     even: [],
//     odd: []
// }
// function evenOddNums(arr) {
//     for (let num of arr) {
//         if (num <= 0) continue
//         if (num % 2 === 0) {
//           result.even.push(num)
//         } else {
//             result.odd.push(num)
//         }
//     }
//     return result
// }

// const {even, odd} = evenOddNums(arr)
// console.log("Even Numbers:", even)
// console.log("Odd Numbers" , odd)

//even or odd in range a to b
let a = 2
let b = 15

let res = {
    even: [],
    odd: []
}
function oddEven(a, b) {
    for (let i = a; i < b; i++){
        if (i % 2 === 0){
            res.even.push(i)
        } else{
            res.odd.push(i)
        }
    }
    return res
}

oddEven(a, b)
console.log("Even:", res.even)
console.log("Odd:",  res.odd)

