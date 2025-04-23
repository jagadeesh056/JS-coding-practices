
function rightTriangle(m) {
    let result = ""
    for (let i=1; i <= m; i++) {
      for(let j=1; j <= i; j++) {
          result += "* "
      }
      result += "\n"
    }
    return result
  }
  
  console.log(rightTriangle(4))