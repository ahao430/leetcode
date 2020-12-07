/*
 * @lc app=leetcode.cn id=1295 lang=javascript
 *
 * [1295] 统计位数为偶数的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  let res = 0
  nums.forEach(num => {
    check(num)
  })
  return res

  function check(num) {
    while (num > 99) {
      num = Math.floor(num / 100)
    }
    if (num > 9) {
      res++
    }
  }
};
// @lc code=end

