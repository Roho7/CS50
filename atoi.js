/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let number = 0;
  if (number <= 2 ** 31 - 1 && number >= (-2) ** 31) {
    number = parseFloat(s) * Math.sign(s);
    console.log(number);
  } else {
    console.log(0);
  }
};
myAtoi("  -45");
