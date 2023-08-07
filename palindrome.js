/**
 * @param {number} n
 * @return {boolean}
 */

let arr = [];
let flag = 0;

const isPalindrome = (x) => {
  let flag2 = 0;
  for (let i = 0; i <= x.length; i++) {
    if (x[i] != x[x.length - i - 1]) {
      flag2 = 1;
    }
  }
  if (flag2 != 0) {
    return false;
  } else {
    return true;
  }
};

var isStrictlyPalindromic = function (n) {
  for (let i = 2; i < n - 2; i++) {
    item = n;
    while (item != 0) {
      let quotient = Math.trunc(item / i);
      let remainder = item % i;
      item = quotient;
      arr.push(remainder);
    }
    if (!isPalindrome(arr)) {
      flag = 1;
    }
  }
  if ((flag = 1)) {
    return false;
  } else {
    console.log("palindrome");
    return true;
  }
};
isStrictlyPalindromic();
