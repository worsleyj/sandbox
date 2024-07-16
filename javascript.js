function sumOfTripledEvens(array) {
    sum = 0;
    for (let i = 0; i < array.length;i++) {
        if (array[i] % 2 == 0) {
            let tripledValued = array[i] *  3;
            sum += tripledValued;
        }
    }
    return sum;
}

console.log([sumOfTripledEvens([1, 2, 4, 6])]);

function addOne(num) {
    if (num % 2 ==0 ) {
        return num * 3;
    } else return num;
}

const arr = [1, 2 ,3 , 4 , 5];
const mappedArr = arr.map(addOne)
console.log(mappedArr);

function isOdd(num) {
    return num % 2 !== 0;
}

const oddNums = arr.filter(isOdd)
console.log(oddNums);
console.log();

const productOfAllNums = arr.reduce((total, currItem) => {
    return total * currItem;
}, 1);

console.log(productOfAllNums);