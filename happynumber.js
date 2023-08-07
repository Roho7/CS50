/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let arr = Array.from(String(n), Number);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] ** 2;
    sum = sum + arr[i];
  }
  if (sum != 1) {
    isHappy(sum);
    console.log(sum);
  } else {
    console.log("true", sum);
  }
};
isHappy(2);
