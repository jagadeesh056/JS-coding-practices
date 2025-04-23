//using for loop
function reverseStr(str) {
    str = str.trim()
    let reversed = ""
    for (let i = str.length-1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}

const answers = reverseStr(" Orange Basket ")
console.log(answers)

//using string and array methods
let strs = "Apple Is here "
const ans = strs.trim().split("").reverse().join("")
console.log(ans);




