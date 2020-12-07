/*
 * @lc app=leetcode.cn id=1480 lang=javascript
 *
 * [1480] 一维数组的动态和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  let sum = 0
  let res = []
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    res.push(sum)
  }
  return res
};
// @lc code=end

