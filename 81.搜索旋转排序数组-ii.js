/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  if (nums.length === 0) return false
  if (nums.length === 1) return nums[0] === target

  let i = 0
  let j = nums.length - 1
  // 从前向后
  while (true) {
    if (nums[i] < target) {
      if (nums[i] <= nums[i+1]) {
        i++
      } else break
    } else if (nums[i] === target) {
      return true
    } else {
      break
    }
  }
  // 从后向前
  while (true) {
    if (nums[j] > target) {
      if (nums[j] >= nums[j - 1]) {
        j--
      } else break
    } else if (nums[j] === target) {
      return true
    } else {
      break
    }
  }

  return false
};
// @lc code=end

