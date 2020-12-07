/*
 * @lc app=leetcode.cn id=1365 lang=javascript
 *
 * [1365] 有多少小于当前数字的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  const copy = [...nums];
  copy.sort((a, b) => a - b)
  const map = {}
  copy.forEach((item, index) => {
    if (map[item] == null) {
      map[item] = index
    }
  })
  return nums.map(item => map[item])
};
// @lc code=end

