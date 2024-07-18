const palindromes = function (string) {
  const validChar = 'abcdefghijklmnopqrstuvwxyz0123456789';

  let newString = "";
  stringArr = string.toLowerCase().split('');
  cleanedString = stringArr.filter((char) => validChar.includes(char)).join('');

  reversedString = cleanedString.split('').reverse().join('');
  
  let isPalindrome = (cleanedString == reversedString);
    return isPalindrome;
};

console.log(palindromes("TEST"));
console.log(palindromes("RACECaR"));