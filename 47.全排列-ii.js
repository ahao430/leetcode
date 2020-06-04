/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let res = []
  nums.sort()
  run([], nums)
  return res
  function run (left, arr) {
    if (arr.length === 1) {
      res.push([...left, ...arr])
    } else {
      let last = null
      arr.forEach((num, index) => {
        if (last !== num) {
          last = num
          run ([...left, num], [...arr.slice(0,index), ...arr.slice(index + 1)])
        }
      })
    }
  }
};
// @lc code=end

