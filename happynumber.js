/**
 * @param {number} n
 * @return {boolean}
 */
const first = [];
var flag = 0;
var isHappy = function (n) {
  let arr = Array.from(String(n), Number);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] ** 2;
    sum = sum + arr[i];
    if (first.includes(sum)) {
      flag = 1;
      return false;
    }
  }
  if (sum != 1) {
    first.push(sum);
    isHappy(sum);
  }
  if (flag != 0) {
    return false;
  } else {
    return true;
  }
};
console.log(isHappy(7));
