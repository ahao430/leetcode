/*
 * @lc app=leetcode.cn id=1608 lang=javascript
 *
 * [1608] 特殊数组的特征值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
  const len = nums.length
  for (let i = 0; i <= len; i++) {
    if (check(i)) return i
  }
  return -1

  function check (i) {
    let count = 0
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] >= i) {
        count++
        if (count > i) return false
      }
    }
    return count === i
  }
};
// @lc code=end

