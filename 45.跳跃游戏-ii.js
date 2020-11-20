/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  if (nums.length <= 1) return 0

  const book = {}
  const len = nums.length
  return jumpFrom(nums, 0)

  function jumpFrom (nums, start) {
    if (book[start]) {
      return book[start]
    } else if (nums[start] >= len - 1 - start) {
      book[start] = 1
      return 1
    } else if (nums[start] === 0) {
      book[start] = 0
      return 0
    } else {
      let min
      let val = nums[start]
      for (let i = start + 1; i <= Math.min(start + val, len - 1); i++) {
        let res = jumpFrom(nums, i)
        if (res > 0) {
          if (min == null || 1 + res < min) {
            min = 1 + res
          }
        }
      }
      book[start] = min
      return min
    }
  }
};
// @lc code=end

