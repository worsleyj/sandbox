const fibonacci = function(index) {
  index = parseInt(index);
  if (index < 0) {
    return "OOPS";
  } else if (index == 0 || index == 1) {
    return index;
  }

  fibonacciArray = [1, 1]
  for (let i = 1; i < index-1; i++) {
    nextValue = fibonacciArray[i] + fibonacciArray[i-1];
    fibonacciArray.push(nextValue);
  }
  return fibonacciArray[index-1];
};


console.log(fibonacci("0"));
console.log(fibonacci(25));