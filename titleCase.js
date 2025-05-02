function titleCase(str) {
    let res = ''
    for (let chr of str.split(" ")) {
        res += chr[0].toUpperCase() + chr.slice(1) + " "
    }
    return res.trim(" ")
}

console.log(titleCase("the quick brown fox jumps over the lazy dog."))