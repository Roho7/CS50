/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let number;
  let arr = "";
  const regex = /\d(?!\d*\e\d)/g;

  if (/\d*\e\d/.test(s)) {
    s = s.replace(regex, " ");
  }
  number = parseFloat(s);
  console.log(s);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "-") {
      number = -1 * number;
    }
  }
  if (Number.isNaN(number)) {
    console.log(0);
    return 0;
  } else if (number >= 2 ** 31 - 1 || number <= (-2) ** 31) {
    number = Math.min(Math.max(number, (-2) ** 31), 2 ** 31 - 1);
    console.log(number);
    return number;
  } else {
    console.log(number);
    return number;
  }
};

myAtoi("   -42");
