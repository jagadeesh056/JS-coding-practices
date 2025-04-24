
function floydTriangle(rows) {
    let num = 1;
    let res = "";
    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= i; j++) {
        res += num++ + " ";
      }
      res += "\n";
    }
    return res;
  }
  console.log(floydTriangle(4));
  
