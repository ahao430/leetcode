/*
 * @lc app=leetcode.cn id=693 lang=javascript
 *
 * [693] 交替位二进制数
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  let num;
  while (n) {
    let m = n % 2;
    if (num == null) {
      num = m;
    } else {
      if (num === 1 && m === 0) {
        num = m;
      } else if (num === 0 && m === 1) {
        num = m;
      } else {
        return false;
      }
    }
    n = (n / 2) << 0;
  }
  return true;
};
