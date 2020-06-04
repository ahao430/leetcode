/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if (divisor === 0) throw new Error('divisor cannot be 0')
  if (dividend === 0) return 0

  let positive = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)
  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)
  let res = 0
  while (dividend >= divisor) {
    dividend -= divisor;
    res++
  }
  if (positive) {
    return res
  } else {
    return -res
  }
};
// @lc code=end

