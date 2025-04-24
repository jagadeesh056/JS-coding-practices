
//    * 
//   * * 
//  * * * 
// * * * * 
//  * * * 
//   * * 
//    * 


function daimondPattern(d){
    let res =""
    for (let i =0; i <= d; i++ ) {
        for (let k = 0; k < d - i; k++ ) res += " "
        for (let j = 0; j < i; j++ ) res += "* "
        res += "\n"
    }
    for (let l = d-1; l >= 1; l--){
        for (let o = 0; o < d- l; o++) res+= " "
        for (let m = 0; m < l; m++) res += "* "
        res += "\n"
    }
    return res
}

console.log(daimondPattern(4))


//using repeat

function daimond(m){
    let res =""
    for (let i=0; i <= m; i++){
        res += " ".repeat(m - i)
        res += "* ".repeat(i)
        res += "\n"
    }
    for (let j = m-1; j >= 0; j--) {
        res += " ".repeat(m - j)
        res += "* ".repeat(j)
        res += "\n"
    }
    return res
}

console.log(daimond(5))