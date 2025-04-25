
let sentence = "I love JavaScript Programming"

let splitted = sentence.split(" ")
let max = splitted[0]
for (let i = 1; i < splitted.length; i++) {
    if (splitted[i].length > max.length){
        max = splitted[i]
    }
}

console.log(max)