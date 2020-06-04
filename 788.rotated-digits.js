/*
 * @lc app=leetcode.cn id=788 lang=javascript
 *
 * [788] Rotated Digits
 */
/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function (N) {
  let count = 0;
  for (let i = 1; i <= N; i++) {
    if (/^(?![018]+$)[0125689]+$/.test(i)) {
      count++;
    }
  }
  return count;
};
