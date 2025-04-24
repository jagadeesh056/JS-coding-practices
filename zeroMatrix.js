// Creating zero matrix

function matrix(m, n) {
    return Array.from({length: m}, () => Array(n).fill(0))
}

//console.log(matrix(2, 3));


// Iterating Through a Matrix

let matri = [
    [1, 2, 3],     // row 0
    [4, 5, 6],     // row 1
    [7, 8, 9],     // row 2
    [10, 11, 12]   // row 3
  ];

function mat(matrix) {
    let res = []
    for (let i = 0; i < matrix.length; i++ ){
        res[i] = []
        for (let j = 0; j < matrix[i].length; j++){
            res[i][j] = matrix[i][j]
        }
    }
    return res
}

//console.log(mat(matri));


//Adding Matrices

let matrix1 = [
    [1, 2, 3], 
    [4, 5, 6]   
]

let matrix2 = [
    [7, 8, 9],  
    [10, 11, 12]
]

function addMatrices(m, n) {
    let res = []
    for(let i = 0; i < m.length; i++) {
        res[i] = []
        for (let j= 0; j < m[i].length; j++) {
            res[i][j] = m[i][j] + n[i][j]
        }
    }
    return res
}

console.log(addMatrices(matrix1, matrix2));


//multiplication of matrices

let mat1 = [
    [1, 2], 
    [3, 4]   
]

let mat2 = [
    [5, 6],  
    [7, 8]
]

function multiplication(m, n) {
    let res = []
    for (let i = 0; i < m.length; i++){
        res[i] = []
        for (let j = 0; j < n[0].length; j++){
            let sum = 0
            for (let k = 0; k < m[0].length; k++) {
                sum += m[i][k] * n[k][j]
            }
            res[i][j] = sum
        }
    }
    return res
}

console.log(multiplication(mat1, mat2))