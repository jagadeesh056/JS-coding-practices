//Transpose a matrix

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]


function transposeMatrix(mat) {
    let res = []
    for (let i = 0; i < mat.length; i++) {
        res[i] = []
        for (let j = 0; j < mat.length; j++) {
            res[i][j] = mat[j][i]
        }
    }
    return res
}

console.log(transposeMatrix(matrix))
