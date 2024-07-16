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