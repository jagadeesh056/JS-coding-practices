
//Rotaion by Counter clockwise

let m = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]


function rotate90CCW(matrix) {
    // transpose
    let trans = [];
    for (let i = 0; i < matrix[0].length; i++) {
      trans[i] = [];
      for (let j = 0; j < matrix.length; j++) {
        trans[i][j] = matrix[j][i];
      }
    }
    return trans.reverse()
  }

console.log(rotate90CCW(m));

  
  // → [ [3, 6, 9], [2, 5, 8], [1, 4, 7] ]
  