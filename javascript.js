function sumRange(num) {
  if (num === 1) {
    return num;
  } else {
    return num + sumRange(num - 1);
  }
}

function power(num, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return num * power(num, exponent - 1);
  }
}

function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(5));
