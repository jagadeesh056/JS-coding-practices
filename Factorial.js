//Using for loop

let a = 10
function factorial(num){
    if (num < 0) return "input number should be > 0"
    let result = 1
    if (num === 1 || num === 0) {
        return 1
    }
    for (let i=1; i <= num; i++){
      result *= i
    }
    return result 
}

const ans = factorial(a)
console.log(ans)

//Using recursive function

function factorialNum(a) {
    if (a === 1 || a === 0) return 1
   return a * factorialNum(a - 1)
}

const answ = factorialNum(5)
console.log(answ);


function factorial(num) {
    let answer = 1;
    for (let i = 2; i <= num; i++) {
        answer *= i;
    }
    return answer;
}

console.log(factorial(7));