const fibonacci = function(index) {
  index = parseInt(index);
  if (index < 0) {
    return "OOPS";
  }

  fibonacciArray = [1, 1]
  for (let i = 1; i < index-1; i++) {
    nextValue = fibonacciArray[i] + fibonacciArray[i-1];
    fibonacciArray.push(nextValue)
  }
  return fibonacciArray[index-1];
};


console.log(fibonacci("4"));
console.log(fibonacci(25));