//reverse matrix with each element

let matrix = [
    [1, 2], 
    [3, 4],
    [5, 6]
]

let ans = matrix
           .slice()
           .reverse()
           .map(row => row.slice().reverse())
console.log(ans)


//using flat and reverse methods

let mat = [
    [5, 6],
    [7, 8],
    [9, 10],
]

let flatted = mat.flat().reverse()
let result = []
let cols = mat[0].length
for (let i = 0; i < flatted.length; i += cols) {
    result.push(flatted.slice(i, i + cols))
}
console.log(result)

//reverse only nested arrays

let res = []
for (let j = mat.length - 1; j >= 0; j--) {
    res.push(mat[j])
}

console.log(res)