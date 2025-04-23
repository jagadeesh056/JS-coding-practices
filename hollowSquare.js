function hollowSquare(h) {
    let res = ""
    for (let i=0; i < h; i++){
        res += "* "
    }
    res += "\n"
    for (let i=1; i <= h -2 ; i++) {
       res += "* ".repeat(1)
       res += "  ".repeat(h - 2)
       res += "*".repeat(1)
       res += "\n"
    }
    for (let i=0; i < h; i++){
        res += "* "
    }
    return res
}

console.log(hollowSquare(5))


function squareHollow(s) {
    let res = ""
    for (let i = 1; i <= s; i++ ) {
        for (let j = 1; j <= s; j++) {
            if (i === 1 || i === s || j === 1 || j === s){
                res += "* "
            } else {
                res += "  "
            }
        }
        res += "\n"
    }
    return res
}

console.log(squareHollow(5))