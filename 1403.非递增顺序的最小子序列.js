/*
 * @lc app=leetcode.cn id=1403 lang=javascript
 *
 * [1403] 非递增顺序的最小子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
  nums.sort((a, b) => b - a)
  let sum = nums.reduce((a, b) => a + b)
  let sum2 = 0
  for (let i = 0; i < nums.length; i++) {
    sum2 += nums[i]
    if (sum2 * 2 > sum) {
      return nums.slice(0, i + 1)
    }
  }
};
// @lc code=end

