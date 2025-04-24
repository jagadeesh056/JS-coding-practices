
// *   *
//  * *
//   * 
//  * *
// *   *

function xPattern(n) {
    let res = ""
    for (let i = 1; i <= n; i++){
        for (let j = 1; j <= n; j++){
            res += (j === i || j === n-i+1 ) ? "* " : "  "
        }
        res += "\n"
    }
    return res
}

console.log(xPattern(5));


function xPattern(n) {
    let output = [];
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n; j++) {
            row += (j === i || j === (n - i + 1)) ? "* " : "  ";
        }
        output.push(row.trimEnd());
    }
    return output.join("\n");
}

console.log(xPattern(5));
