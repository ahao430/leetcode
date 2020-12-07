/*
 * @lc app=leetcode.cn id=1512 lang=javascript
 *
 * [1512] 好数对的数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  const map = {}
  nums.forEach(num => {
    if (map[num] == null) map[num] = 0
    map[num]++
  })
  let res = 0
  for (let key in map) {
    let val = map[key]
    if (val > 1) {
      res += val * [val - 1] / 2
    }
  }
  return res
};
// @lc code=end

