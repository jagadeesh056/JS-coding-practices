function pymarid(m) {
    let res = ""
    for (let i=1; i <= m; i++) {
        res += " ".repeat(m - i)
        res += "* ".repeat(i)
        res += "\n"
    }
    return res
}

console.log(pymarid(5));



function pyramid(p){
    let result = ""
    for (let i=1; i <= p; i++ ) {
        for (let j = 0; j < (p - i); j++ ){
            result += " "
        }
        for (let k=0; k < i; k++) {
            result += "* "
        }
        result += "\n"
    }
    return result
}

console.log(pyramid(6))