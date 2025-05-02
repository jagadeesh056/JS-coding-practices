
function generateHexaDecimal() {
   let hexa = "0123456789ABCDEF"
   let code = "#"
   for (let i = 0; i < 6; i++){
    code += hexa[Math.floor(Math.random() * 16)]
   }
   return code
}

console.log(generateHexaDecimal());