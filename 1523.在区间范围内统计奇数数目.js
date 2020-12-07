/*
 * @lc app=leetcode.cn id=1523 lang=javascript
 *
 * [1523] 在区间范围内统计奇数数目
 */

// @lc code=start
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
  if (low % 2 === 0) low = low + 1
  if (high % 2 === 0) high = high - 1
  return (high - low) / 2 + 1
};
// @lc code=end

