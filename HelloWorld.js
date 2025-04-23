//console.log("Hello World")


function add(a, b) {
    if (a > 0 && b >0){
        return `Sum is ${a*b}`
    } else {
        throw new RangeError("provide positive Number")
    }
}

console.log(add(3, 5))
console.log(add(3.5, 5))
console.log(add(NaN, 5))
console.log(add(-3, 5))
