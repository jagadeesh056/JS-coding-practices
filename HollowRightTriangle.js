// * 
// * * 
// *   * 
// *     * 
// * * * * * 


function hollowRightTriangle(t) {
    let res = ""
    for(let i = 1; i <= t; i++) {
        for (let j = 1; j <= i; j++){
            if (i === 1 || i === t || j === 1 || j === i) {
                res += "* "
            } else {
                res += "  "
            }
        }
        res += "\n"

    }
    return res
}

console.log(hollowRightTriangle(5))

//Numbered hollow Right Triangle

function hollowRightTriangles(t) {
    let res = ""
    let num = 1
    for(let i = 1; i <= t; i++) {
        for (let j = 1; j <= i; j++){
            const border =  (i === 1 || i === t || j === 1 || j === i)
            if (border) {
              res += String(num++).padEnd(4, " ")
            } else {
                res += "     "
            }  
        }
        res = res.trimEnd()
        res += "\n"
    }
    return res
}

console.log(hollowRightTriangles(5))