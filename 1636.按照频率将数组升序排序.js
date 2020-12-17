/*
 * @lc app=leetcode.cn id=1636 lang=javascript
 *
 * [1636] 按照频率将数组升序排序
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
  const map = {}
  nums.forEach(num => {
    if (map[num] == null) {
      map[num] = 1
    } else {
      map[num]++
    }
  })
  nums.sort((a, b) => {
    if (map[a] === map[b]) return b - a
    return map[a] - map[b]
  })
  return nums
};
// @lc code=end

