//    * 
//   * * 
//  *   * 
// *     * 
//  *   * 
//   * * 
//    * 


function hollowDiamond(m) {
    let res = "";
    for (let i = 0; i < m; i++) {
        res += " ".repeat(m - i - 1);    
        for (let j = 0; j <= i; j++) {
            res += (j === 0 || j === i) ? "* " : "  ";
        }
        res += "\n";
    }
    for (let i = m - 2; i >= 0; i--) {
        res += " ".repeat(m - i - 1);    
        for (let j = 0; j <= i; j++) {
            res += (j === 0 || j === i) ? "* " : "  ";
        }
        res += "\n";
    }
    return res;
}

console.log(hollowDiamond(5));

