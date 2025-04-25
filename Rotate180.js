

let m = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
] 

function rotate180(m) {
    return answer = m.slice().reverse().map(row => row.slice().reverse())
}

console.log(rotate180(m));
