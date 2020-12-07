/*
 * @lc app=leetcode.cn id=1413 lang=javascript
 *
 * [1413] 逐步求和得到正数的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
  let sum = 0
  let min = 1 // 任意正数
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (sum < 0) {
      let initVal = 1 - sum
      if (min == null || initVal > min) {
        min = initVal
      }
    }
  }
  return min
};
// @lc code=end

