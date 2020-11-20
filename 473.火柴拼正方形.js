/*
 * @lc app=leetcode.cn id=473 lang=javascript
 *
 * [473] 火柴拼正方形
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var makesquare = function(nums) {
  const sum = nums.reduce((a, b) => a + b)
  if (sum % 4 !== 0) return false

  const len = sum / 4
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > len) return false
    //
  }
};
// @lc code=end

