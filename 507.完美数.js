/*
 * @lc app=leetcode.cn id=507 lang=javascript
 *
 * [507] 完美数
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  if (num === 1) return false;

  let divisors = [1];
  let x = 1;
  let y = num;
  while (x < y) {
    x++;
    if (num % x === 0) {
      y = num / x;
      if (x < y) {
        divisors.push(x, y);
      } else if (x === y) {
        divisors.push(x);
      }
    }
  }
  let sum = divisors.reduce((a, b) => a + b);
  return sum === num;
};
