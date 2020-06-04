/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let book = {}
  return jump(nums, 0)

  function jump (nums, index) {
    if (book[index]) return false
    book[index] = true

    if (index >= nums.length - 1) return true
    if (nums[index] === 0) return false

    for (let i = index + 1; i <= nums.length && i <= index + nums[index]; i++) {
      let res = jump(nums, i)
      if (res) {
        return res
      }
    }
    return false
  }
};
// @lc code=end

