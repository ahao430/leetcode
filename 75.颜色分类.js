/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let head = 0 // 记录非0起始位置
  let tail = nums.length - 1 // 记录非2倒数位置
  let i = 0
  while (head < tail && i <= tail) {
    if (nums[i] === 2) {
      // 向后交换
      if (nums[tail] === 2) {
        tail--
        continue
      }
      exchange(i, tail)
      tail--
    }
    if (nums[i] === 0) {
      // 向前交换
      exchange(head, i)
      head++
    }
    i++
  }
  return nums

  function exchange(i,j) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }
};
// @lc code=end

