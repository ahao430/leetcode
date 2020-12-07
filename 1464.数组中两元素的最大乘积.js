/*
 * @lc app=leetcode.cn id=1464 lang=javascript
 *
 * [1464] 数组中两元素的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let top = 1, top2 = 1 // 1 <= nums[i] <= 10^3
  nums.forEach(num => {
    if (num > top) {
      top2 = top
      top = num
    } else if (num > top2) {
      top2 = num
    }
  })
  return (top - 1) * (top2 - 1)
};
// @lc code=end

