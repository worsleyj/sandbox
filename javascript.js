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

console.log(power(2, 4));

// 3 + 2 + 1
