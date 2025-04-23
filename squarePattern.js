
function squarePattern(n) {
    let pattern = ""
    for(let i = 1; i <= n; i++ ){
        for (let j = 1; j <= n; j++) {
            pattern += "* "
        }
        pattern += "\n"
    }
    return pattern
}

console.log(squarePattern(4))