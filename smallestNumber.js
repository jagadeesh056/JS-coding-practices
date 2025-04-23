let arr = [ 22, 33, 50, 44, -85, -96, 36, 55]
let arr2 = [ 22, 45, 87, 96, 32, 80, 20, 43]

function findSmallest(arr) {
    let smallNum = arr[0]
    for(let num of arr) {
        if (num < smallNum){
            smallNum = num
        }
    }
    return smallNum
}

const ans1 = findSmallest(arr)
//const ans2 = findSmallest(arr2)
console.log("Smallest Number is:", ans1)
//console.log("Smallest number:", ans2)


//using Math.min
let answer1 = Math.min(...arr2)
console.log("Smallest Number using \"min\":", answer1)


//using sort

/*  wrong approach
let sorted = arr.sort()
console.log(sorted)
console.log(sorted[0])
*/

//correct approach
let sorted = arr.slice().sort((a, b) => a - b)
console.log(sorted[0])
console.log(arr);
