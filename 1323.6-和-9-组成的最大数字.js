/*
 * @lc app=leetcode.cn id=1323 lang=javascript
 *
 * [1323] 6 和 9 组成的最大数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
  let temp = num
  let sixIndex = -1
  let i = 0
  while (temp) {
    if (temp % 10 === 6) {
      sixIndex = i
    }
    temp = Math.floor(temp / 10)
    i++
  }
  if (sixIndex > -1) {
    return num + (9 - 6) * Math.pow(10, sixIndex)
  }
  return num
};
// @lc code=end

