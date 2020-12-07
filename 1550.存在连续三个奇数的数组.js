/*
 * @lc app=leetcode.cn id=1550 lang=javascript
 *
 * [1550] 存在连续三个奇数的数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
  let i = 0
  while (i < arr.length - 2) {
    if (arr[i] % 2 === 0) {
      i++
    } else if (arr[i + 1] % 2 === 0) {
      i += 2
    } else if (arr[i + 2] % 2 === 0) {
      i += 3
    } else {
      return true
    }
  }
  return false
};
// @lc code=end

