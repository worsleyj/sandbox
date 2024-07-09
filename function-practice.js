function add7(number) {
    return number + 7;
}

console.log(add7(15))

function multiply(num1, num2) {
    return num1*num2;
}

console.log(multiply(2, 4))

let capitalize = (word) => {
    const firstLetter = word.charAt(0);
    const remainingLetters= word.slice(1);
    const firstLetterCap = firstLetter.toUpperCase();

    return firstLetterCap + remainingLetters;
};

console.log(capitalize("chicken"))

let lastLetter = function(string) {
    return string.charAt(string.length-1);
};

console.log(lastLetter("abcd"))