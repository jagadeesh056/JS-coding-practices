function reverseKeepSpecial(str) {
    const letters = str.match(/[a-zA-Z]/g)
    i = letters.length - 1
    return str.split("").map(chr => {
        return /[a-zA-Z]/.test(chr) ? letters[i--] : chr
    }).join("")
}

let word = "a@b!cd-?ef"
//console.log(reverseKeepSpecial(word));

function reverseKeep(str) {
    let letters = str.match(/[a-zA-Z]/g)
    let i = letters.length - 1
    return str.split("").map(char => {
        return /[a-zA-Z]/g.test(char) ? letters[i--] : char
   }).join("")
}

let words = "a@b!cd-?ef"
console.log(reverseKeep(words));
