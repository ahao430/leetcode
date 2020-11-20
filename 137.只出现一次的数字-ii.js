/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let once = 0
  let twice = 0
  nums.forEach((num) => {
    once = ~twice & (once ^ num)
    twice = ~once & (twice ^ num)
  })
  return once
};
// @lc code=end

