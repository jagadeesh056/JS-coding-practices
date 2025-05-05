function fib(n) {
    if (n <= 1) return n
    return fib(n - 1) + fib(n - 2)
}

// Print first 10 Fibonacci numbers
for (let i = 0; i < 10; i++) {
    console.log(fib(i));
}


function fibonnaci(num) {
    let num1 = 0, num2 = 1, nextNum;
    console.log("fibbonaci")
    for (let i = 1; i <= num; i++) {
        console.log(num1)
        nextNum = num1 + num2;
        num1 = num2;
        num2 = nextNum;
    }
}
fibonnaci(10)