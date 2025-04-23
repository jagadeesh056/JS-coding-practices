function invertedTriangle(m) {
    let res = ''
    for (let i=m; i >0; i--) {
        for (let j=i; j > 0; j--){
            res += "* "
        }
        res += "\n"
    }
    return res
}

console.log(invertedTriangle(4))


function invertedTriangle(n) {
    let res = "";
    for (let i = n; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            res += "* ";
        }
        res += '\n';
    }
    return res;
}
console.log(invertedTriangle(4));
