//clockwise rotation

let m = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function rotate90CW(m) {
   let res = []
   for (let i = 0; i < m[0].length; i++  ){
    res[i] = []
    for (let j = 0; j < m.length; j++) {
        res[i][j] = m[j][i]
    }
   }
   return res.map(row => row.reverse())
}

console.log(rotate90CW(m));

// [ 
//     [ 7, 4, 1 ],
//     [ 8, 5, 2 ],
//     [ 9, 6, 3 ] 
// ]  