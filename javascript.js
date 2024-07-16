const sum = function(array) {
    const total = array.reduce((total, current) => {
      return total + current;
    })
    return total
  };

console.log(sum([1, 2, 3]));

const multiply = function(array) {
    const multiplied = array.reduce((total, current) => {
      return total * current;
    })
    return multiplied;
  };

console.log(multiply([1,2,3,4]));

const factorial = function(num) {
    let factorial = 1;
    for (let i = 0; i < num; i++) {
      factorial *= num-i;
    }
    return factorial;
  };

console.log(factorial(5));