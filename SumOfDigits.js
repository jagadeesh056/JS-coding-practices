//sum of digits
let number = 123456789
number = String(number)
let ans = number.split("")
let result = 0
for (let char of ans) {
    result += Number(char)
}
console.log(result);
console.log(typeof result);


//using reduce

