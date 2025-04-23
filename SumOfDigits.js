//sum of digits

let number = 123456789
number = String(number)
let ans = number.split("")
let result = 0
for (let char of ans) {
    result += Number(char)
}
//console.log(result);



//using reduce

let num = 56893
num = String(num)
let answer = num.split("").reduce((acc, cur) => acc + Number(cur), 0)
// console.log(answer)


//Using forEach

function sumofDigits(num) {
    let stringNum = num.toString()
    let splittedStr = stringNum.split("")
    let sum = 0
    splittedStr.forEach(element => {
        sum += parseInt(element)
    });
    return sum
}

console.log(sumofDigits("51482"))


//using %

function calculateSum(nums) {
    
}

calculateSum(5637)