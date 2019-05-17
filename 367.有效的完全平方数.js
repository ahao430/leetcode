/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num === 1) return true;
  let i = 0;
  let j = num;
  while (true) {
    let mid = Math.floor((i + j) / 2);
    if (mid === i || mid === j) return false;
    if (mid ** 2 > num) {
      j = mid;
    } else if (mid ** 2 < num) {
      i = mid;
    } else {
      return true;
    }
  }
};
