/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
  return num >= 0 && /^10*$/.test(num.toString(4));
};
