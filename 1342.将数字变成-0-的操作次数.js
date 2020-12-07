/*
 * @lc app=leetcode.cn id=1342 lang=javascript
 *
 * [1342] 将数字变成 0 的操作次数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
  if (num === 0) return 0

  let count = 0
  while (num) {
    if (num % 2 === 0) {
      num /= 2
      count++
    } else {
      num--
      count++
    }
  }
  return count
};
// @lc code=end

