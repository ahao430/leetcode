/*
 * @lc app=leetcode.cn id=1313 lang=javascript
 *
 * [1313] 解压缩编码列表
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
  let res = []
  let i = 0
  while (i < nums.length - 1) {
    let count = nums[i]
    while (count) {
      res.push(nums[i + 1])
      count--
    }
    i += 2
  }
  return res
};
// @lc code=end

