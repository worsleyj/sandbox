const leapYears = function(year) {
    let divisibleByFour = year % 4 == 0;
    let divisibleByOneHundred = year % 100 == 0;
    let divisibleByFourHundred = year % 400 == 0;
    
    if (divisibleByFour && !divisibleByOneHundred) {
        return true;
    } else if (divisibleByFourHundred) {
        return true;
    } else return false;
};

console.log(leapYears(1900));