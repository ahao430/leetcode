/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums.sort((a, b) => a - b)
  const len = nums.length
  let set = new Set()
  for (let i = 0; i < len; i++) {
    let temp = []
    for (let j = i; j < len ; j++) {
      temp.push(nums[j])
      set.add(temp.join(','))
    }
  }
  let arr = [...set].map(item => item.split(','))
  return [[], ...arr]
};
// @lc code=end

