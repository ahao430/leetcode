/*
 * @lc app=leetcode.cn id=1051 lang=javascript
 *
 * [1051] 高度检查器
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  let target = [...heights]
  target.sort((a, b) => a - b)
  let res = 0
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== target[i]) res++
  }
  return res
};
// @lc code=end

