/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0
  let j = i + 1
  while (i < nums.length) {
    while (nums[i] === nums[j]) {
      if (j === i + 2) {
        nums.splice(j, 1)
      } else {
        j++
      }
    }
    i = j
    j++
  }
  return nums.length
};
// @lc code=end

