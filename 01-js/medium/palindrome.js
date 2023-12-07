/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

//
function isPalindrome(str) {
  str = str
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .split(" ")
    .join("");
  var revStr = "";
  for (i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return str.toLowerCase() === revStr.toLowerCase();
}

module.exports = isPalindrome;
