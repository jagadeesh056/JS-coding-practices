function fib(n) {
    if (n <= 1) return n
    return fib(n - 1) + fib(n - 2)
}

// Print first 10 Fibonacci numbers
for (let i = 0; i < 10; i++) {
    console.log(fib(i));
}
