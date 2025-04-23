function leapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
        return "Leap Year"
    } 
    return "not a Leap year"
}

const ans = leapYear(2024)
console.log(ans);
