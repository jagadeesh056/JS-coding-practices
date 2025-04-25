

let a = [1, 3, 2, [4, 5], 2, 3];

let replaceIndexes  = new Set([1, 3, 7])
let newValue = 55

for (let i=0; i < a.length; i++) {
    if (replaceIndexes.has(i)) {
        a[i] = newValue
    }
}

console.log(a)